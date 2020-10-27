package com.mailsender.person.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mailsender.exceptions.InvalidMailException;
import com.mailsender.exceptions.ResourceNotFoundException;
import com.mailsender.person.Person;
import com.mailsender.person.PersonDto;
import com.mailsender.person.service.PersonService;


@RestController
public class PersonRestController {
	
	@Autowired
	private PersonService service;
	
	@GetMapping("/persons")
	public List<Person> getAllPersons() {
		return service.getAll();
	}
	
	@GetMapping("/persons/interest/{interest}")
	public List<Person> findByInterest() throws ResourceNotFoundException {
		return service.findByInterest(Arrays.asList("123", "zxc"));
	}
	
	@PostMapping("/person/add")
	public Person addPerson(@RequestBody PersonDto newPerson) throws InvalidMailException {
		return service.add(newPerson);
	}
	
	@PostMapping("/person/edit")
	public ResponseEntity<Person> editPerson(@RequestBody PersonDto newPersonData) throws ResourceNotFoundException {
		return service.edit(newPersonData);
	}
	
	@DeleteMapping("/person/delete/{id}")
	public int deletePerson(@PathVariable int id) throws ResourceNotFoundException {
		return service.delete(id);
	}
}
