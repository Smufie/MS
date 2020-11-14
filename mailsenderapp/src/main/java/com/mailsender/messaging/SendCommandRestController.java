package com.mailsender.messaging;

import java.util.ArrayList;
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
import com.mailsender.personcrud.InterestDto;
import com.mailsender.personcrud.PersonDto;
import com.mailsender.personcrud.PersonRestController;

@RestController
@ComponentScan(basePackages = {"com.mailsender.personcrud", "com.mailsender.messaging"})
@Configuration
public class SendCommandRestController {
	
	@Autowired
	private PersonRestController personController;
	
	@Autowired
	private SendCommandService sendCommandService;
	
	@PostMapping("/send")
	public int sendMessageToRecipients(@RequestBody SendCommandDto command) throws AddressException, MessagingException, PersonNotFoundException {
		List <Integer> interestIds = new ArrayList<Integer>();
		for (InterestDto interest : command.getInterests()) {
			interestIds.add(interest.getInterest_id());
		}
		
		List<PersonDto> persons =  personController.findByInterests(interestIds);
		

		int foundPersonsCounter = persons.size();
		while(!persons.isEmpty()) {
			PersonDto person = persons.remove(0);
			sendCommandService.sendMessageToRecipients(person, command.getMessage());
		}
		return foundPersonsCounter;
	}
}