package com.mailsender.personcrud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.mailsender.exceptions.InvalidMailException;
import com.mailsender.exceptions.PersonNotFoundException;

@Service
public class PersonService {

	@Autowired
	private PersonRepository persons;

	@Autowired
	private InterestRepository interests;
	
	public List<Person> getAll() {
		return persons.findAll();
	}

	public Person add(PersonDto newPerson) throws InvalidMailException {
		// TODO validator
		boolean isValid = MailValidator.validate(newPerson.getMail());
		if (isValid) {
			List<Interest> newPersonInterests = interests.findAllById(newPerson.getInterests());
			Person person = new Person();
			person.setName(newPerson.getName());
			person.setMail(newPerson.getMail());
			person.assignInterests(newPersonInterests);
			return persons.save(person);	
		} else {
			throw new InvalidMailException("Mail: " + newPerson.getMail() + " is not available.");
		}
	}

	public ResponseEntity<Person> edit(PersonDto newPersonData) throws PersonNotFoundException {
		// TODO validator
		Person person = persons.findById(newPersonData.getId())
				.orElseThrow(() -> new PersonNotFoundException("Person not found for this id: " + newPersonData.getId()));
		
		List<Interest> newPersonInterests = interests.findAllById(newPersonData.getInterests());
		
		person.setName(newPersonData.getName());
		person.setMail(newPersonData.getMail());
		person.assignInterests(newPersonInterests);
		
		return ResponseEntity.ok(this.persons.save(person));
	}

	public int delete(int id) throws PersonNotFoundException {
		Person person = persons.findById(id)
				.orElseThrow(() -> new PersonNotFoundException("Person not found for this id: " + id));
		
		this.persons.delete(person);
		return id;
	}
	
	public List<Person> findByInterests(List<Integer> interests) throws PersonNotFoundException {
		return persons.findAllByInterests(interests);
	}
}
