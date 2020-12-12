package com.mailsender.person;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.mailsender.person.exceptions.InvalidMailException;
import com.mailsender.person.exceptions.PersonNotFoundException;
import com.mailsender.utilities.MailValidator;

@Service
class PersonService {

	@Autowired
	private PersonRepository persons;

	@Autowired
	private InterestRepository interests;

	public ResponseEntity<List<PersonDto>> getAll() {
		List<Person> personEntities = persons.findAll();
		List<PersonDto> personsDto = new ArrayList<PersonDto>();
		personEntities.forEach((entity) -> {
			personsDto.add(entity.translateToDto());
		});
		return ResponseEntity.ok(personsDto);
	}

	public ResponseEntity<PersonDto> add(PersonDto newPerson) throws InvalidMailException {
		MailValidator.validate(newPerson.getMail());

		List<Interest> newPersonInterests = interests.findAllById(newPerson.getInterestsIds());
		Person person = new Person();

		person.setName(newPerson.getName());
		person.setMail(newPerson.getMail());
		person.assignInterests(newPersonInterests);

		persons.save(person);

		newPerson.setId(person.getId());
		return ResponseEntity.ok(newPerson);
	}

	public ResponseEntity<PersonDto> edit(PersonDto newPersonData)
			throws PersonNotFoundException, InvalidMailException {
		MailValidator.validate(newPersonData.getMail());

		Person person = persons.findById(newPersonData.getId()).orElseThrow(
				() -> new PersonNotFoundException("Person not found for this id: " + newPersonData.getId()));

		List<Interest> newPersonInterests = interests.findAllById(newPersonData.getInterestsIds());

		person.setName(newPersonData.getName());
		person.setMail(newPersonData.getMail());
		person.assignInterests(newPersonInterests);

		this.persons.save(person);

		return ResponseEntity.ok(newPersonData);
	}

	public ResponseEntity<Integer> delete(Integer id) throws PersonNotFoundException {
		Person person = persons.findById(id)
				.orElseThrow(() -> new PersonNotFoundException("Person not found for this id: " + id));

		this.persons.delete(person);
		return ResponseEntity.ok(id);
	}

	public ResponseEntity<List<PersonDto>> findByInterests(List<Integer> interests) throws PersonNotFoundException {
		List<Person> personEntities = persons.findAllByInterests(interests);
		List<PersonDto> personsDto = new ArrayList<PersonDto>();
		personEntities.forEach((entity) -> {
			personsDto.add(entity.translateToDto());
		});
		return ResponseEntity.ok(personsDto);
	}
}
