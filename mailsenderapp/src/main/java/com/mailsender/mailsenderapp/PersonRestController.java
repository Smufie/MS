package com.mailsender.mailsenderapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class PersonRestController {
	
	@Autowired
	PersonCollection persons;
	
	@GetMapping("/persons")
	public List<Person> getAllPersons() {
		return persons.getPersons();
	}
	
	@PostMapping("/person/add")
	public Person addPerson(@RequestBody PersonDto newPerson) {
		return persons.addPerson(newPerson);
	}
	
	@PostMapping("/person/edit")
	public Person editPerson(@RequestBody PersonDto newPersonData) {
		return persons.editPerson(newPersonData);
	}
	
}
