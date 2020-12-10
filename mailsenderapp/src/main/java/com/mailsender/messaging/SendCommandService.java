package com.mailsender.messaging;

import java.util.List;

import javax.mail.MessagingException;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
class SendCommandService {

	private MessageSender sender;

	// TODO wzorzec strategii

	public ResponseEntity<Integer> sendMessageToRecipients(SendCommandDto command) throws MessagingException {
		List<RecipientDto> recipients = command.getRecipients();

		int foundPersonsAmount = recipients.size();
		while (!recipients.isEmpty()) {
			RecipientDto recipient = recipients.remove(0);
			sender.sendMessage(recipient, command.getMessage());
		}
		return ResponseEntity.ok(foundPersonsAmount);
	}

	public void setSender(MessageSender sender) {
		this.sender = sender;
	}
}
