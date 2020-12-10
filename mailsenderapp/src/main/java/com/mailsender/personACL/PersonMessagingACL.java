package com.mailsender.personACL;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.mailsender.messaging.RecipientDto;
import com.mailsender.messaging.SendCommandDto;
import com.mailsender.messaging.SendCommandRestController;
import com.mailsender.person.PersonDto;

public class PersonMessagingACL {

	@Autowired
	private SendCommandRestController sendController;

	public ResponseEntity<Integer> sendMail(List<PersonDto> persons, String message) throws Exception {
		List<RecipientDto> recipients = new ArrayList<RecipientDto>();
		persons.forEach((person) -> {
			recipients.add(new RecipientDto(person.getMail(), person.getName()));
		});
		return sendController.sendMailToRecipients(new SendCommandDto(recipients, message));
	}
}

//TODO API GATEWAY, WYWAL LOGIKE - KONWERSJA