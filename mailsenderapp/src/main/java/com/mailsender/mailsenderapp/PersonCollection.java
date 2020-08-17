package com.mailsender.mailsenderapp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class PersonCollection {
	
	private List<Person> persons = new ArrayList<>();;
	
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
		try {
			return persons.get(id);
		} catch (IndexOutOfBoundsException e) {
			return null;
		}
	}

	public Person addPerson(Person newPerson) {
		persons.add(newPerson);
		return newPerson;
	}
}
