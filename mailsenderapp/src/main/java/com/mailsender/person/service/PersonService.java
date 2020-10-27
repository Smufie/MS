package com.mailsender.person.service;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.mailsender.exceptions.InvalidMailException;
import com.mailsender.exceptions.ResourceNotFoundException;
import com.mailsender.person.Person;
import com.mailsender.person.PersonDto;
import com.mailsender.person.repository.PersonRepository;

@Service
public class PersonService {

	@Autowired
	private PersonRepository persons;

	public List<Person> getAll() {
		return persons.findAll();
	}

	public Person add(PersonDto newPerson) throws InvalidMailException {
		boolean isValid = MailValidator.validate(newPerson.getMail());
		if (isValid) {
			Person person = new Person(newPerson.getName(), newPerson.getMail(), newPerson.getInterests());
			return persons.save(person);	
		} else {
			throw new InvalidMailException("Mail: " + newPerson.getMail() + " is not available.");
		}
	}

	public ResponseEntity<Person> edit(PersonDto newPersonData) throws ResourceNotFoundException {
		Person person = persons.findById(newPersonData.getId())
				.orElseThrow(() -> new ResourceNotFoundException("Person not found for this id: " + newPersonData.getId()));
		
		person.setName(newPersonData.getName());
		person.setMail(newPersonData.getMail());
		person.setInterest(newPersonData.getInterests());
		
		return ResponseEntity.ok(this.persons.save(person));
	}

	public int delete(int id) throws ResourceNotFoundException {
		Person person = persons.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Person not found for this id: " + id));
		
		this.persons.delete(person);
		return id;
	}
	
	public List<Person> findByInterest(List<String> interest) throws ResourceNotFoundException {
		return persons.xyz(interest);
	}
}
