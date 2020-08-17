package com.mailsender.mailsenderapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@GetMapping("/person/{id}")
	public ResponseEntity<Person> getPersonById(@PathVariable("id") int id) {
		Person foundPerson = persons.getPersonById(id);
		if (foundPerson != null) {
			return new ResponseEntity<Person> (foundPerson, HttpStatus.OK);
		} else {
			return new ResponseEntity<Person> (HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/person/add")
	public int addPerson(@RequestBody PersonDto newPerson) {
		return persons.addPerson(newPerson);
	}
	
	@PostMapping("/person/edit")
	public void editPerson(@RequestBody PersonDto newPersonData) {
		persons.editPerson(newPersonData);
	}
	
}
