package com.mailsender.mailsenderapp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class PersonCollection {
	
	private List<Person> persons = new ArrayList<>();
	
	@Autowired
	public PersonCollection() {
		persons.add(new Person("Jan"));
		persons.add(new Person("John"));
		persons.add(new Person("Giovani"));
		persons.add(new Person("Johan"));
	}
	
	public List<Person> getPersons() {
		return persons;
	}

	public Person getPersonById(int id) {
		for (Person person : persons) {
			if (id == person.getId()) {
				return person;
			}
		}
		return null;
	}

	public Person addPerson(PersonDto newPerson) {
		Person person = new Person(newPerson.getName());
		persons.add(person);
		return person;
	}

	public Person editPerson(PersonDto newPersonData) {
		Person personById = getPersonById(newPersonData.getId());
		if (personById != null) {
			personById.setName(newPersonData.getName());
			return personById;
		} else {
			return null;
		}
	}
}
