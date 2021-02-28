package com.mailsender.conversion;

import java.util.ArrayList;
import java.util.List;

import com.mailsender.messaging.RecipientDto;
import com.mailsender.person.PersonDto;
import com.mailsender.queue.SendCommandDto;

public class PersonMessagingACL {

	public SendCommandDto convertPersonsToSendCommand(List<PersonDto> persons, String message) {
		List<RecipientDto> recipients = new ArrayList<RecipientDto>();
		persons.forEach((person) -> {
			recipients.add(new RecipientDto(person.getMail(), person.getName()));
		});
		SendCommandDto sendCommand = new SendCommandDto(recipients, message);
		return sendCommand;
	}
}