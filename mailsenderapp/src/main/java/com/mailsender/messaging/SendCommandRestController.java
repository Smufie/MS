package com.mailsender.messaging;

import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mailsender.exceptions.PersonNotFoundException;
import com.mailsender.personcrud.Person;
import com.mailsender.personcrud.PersonService;

@RestController
@ComponentScan(basePackages = {"com.mailsender.personcrud", "com.mailsender.messaging"})
@Configuration
public class SendCommandRestController {
	
	@Autowired
	private PersonService personService;
	
	@Autowired
	private SendCommandService sendCommandService;
	
	@PostMapping("/send")
	public int sendMessageToRecipients(@RequestBody SendCommandDto sendCommand) throws PersonNotFoundException, AddressException, MessagingException {
		// TODO service/controller
		List<Person> persons =  personService.findByInterests(sendCommand.getInterests());
		int foundPersonsCounter = persons.size();
		sendCommandService.sendMessageToRecipients(persons, sendCommand.getMessage());
		return foundPersonsCounter;
	}
}