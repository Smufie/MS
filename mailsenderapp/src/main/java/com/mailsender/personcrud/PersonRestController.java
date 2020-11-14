package com.mailsender.personcrud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mailsender.exceptions.InvalidMailException;
import com.mailsender.exceptions.PersonNotFoundException;


@RestController
public class PersonRestController {
	
	@Autowired
	private PersonService service;
	
	@GetMapping("/persons")
	public List<PersonDto> getAllPersons() {
		return service.getAll();
	}
	
	@GetMapping("/persons/interest/{interests}")
	public List<PersonDto> findByInterests(@PathVariable List<Integer> interestIds) throws PersonNotFoundException {
		return service.findByInterests(interestIds);
	}
	
	@PostMapping("/person/add")
	public PersonDto addPerson(@RequestBody PersonDto newPerson) throws InvalidMailException {
		return service.add(newPerson);
	}
	
	@PostMapping("/person/edit")
	public PersonDto editPerson(@RequestBody PersonDto newPersonData) throws PersonNotFoundException, InvalidMailException {
		// TODO Response entity
		return service.edit(newPersonData);
	}
	
	@DeleteMapping("/person/delete/{id}")
	@ResponseBody
	public int deletePerson(@PathVariable int id) throws PersonNotFoundException {
		return service.delete(id);
	}
}
