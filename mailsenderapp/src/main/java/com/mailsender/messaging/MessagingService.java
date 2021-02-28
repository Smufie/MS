package com.mailsender.messaging;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mailsender.messaging.exceptions.SenderStrategyNotFoundException;

@Service
class MessagingService {

	@Autowired
	private SenderFactory factory;

	private MessageSender sender;

	public void send(MessageDto message) throws SenderStrategyNotFoundException, MessagingException {
		sender = factory.getSender(message.getType());
		sender.sendMessage(message.getRecipient(), message.getMessage());
	}

}
