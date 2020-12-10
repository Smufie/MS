package com.mailsender.person;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mailsender.person.exceptions.InvalidMailException;
import com.mailsender.person.exceptions.PersonNotFoundException;
import com.mailsender.personACL.PersonMessagingACL;

@RestController
public class PersonRestController {

	PersonMessagingACL acl = new PersonMessagingACL();

	@Autowired
	private PersonService service;

	@GetMapping("/persons")
	public ResponseEntity<List<PersonDto>> getAllPersons() {
		return service.getAll();
	}

	@GetMapping("/persons/interest/{interests}")
	public ResponseEntity<List<PersonDto>> findByInterests(@PathVariable List<Integer> interestIds)
			throws RuntimeException {
		return service.findByInterests(interestIds);
	}

	@PostMapping("/person/add")
	public ResponseEntity<PersonDto> addPerson(@RequestBody PersonDto newPerson) throws RuntimeException {
		return service.add(newPerson);
	}

	@PostMapping("/person/edit")
	public ResponseEntity<PersonDto> editPerson(@RequestBody PersonDto newPersonData)
			throws PersonNotFoundException, InvalidMailException {
		return service.edit(newPersonData);
	}

	@PostMapping("/person/send")
	public ResponseEntity<Integer> callMailSending(@RequestBody MessageDto message) throws Exception {
		List<PersonDto> persons = this.findByInterests(message.getInterestIds()).getBody();
		return acl.sendMail(persons, message.getMessage());
	}

	@DeleteMapping("/person/delete/{id}")
	@ResponseBody
	public ResponseEntity<Integer> deletePerson(@PathVariable Integer id) throws RuntimeException {
		return service.delete(id);
	}
}
