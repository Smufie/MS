package com.mailsender.messaging;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
class SendCommandService {

	@Autowired
	SenderFactory factory;

	private MessageSender sender;

	public ResponseEntity<Integer> sendMessageToRecipients(SendCommandDto command) throws Exception {
		sender = factory.getSender(command.getSenderType());

		List<RecipientDto> recipients = command.getRecipients();

		int foundPersonsAmount = recipients.size();
		while (!recipients.isEmpty()) {
			RecipientDto recipient = recipients.remove(0);
			sender.sendMessage(recipient, command.getMessage());
		}
		return ResponseEntity.ok(foundPersonsAmount);
	}
}
