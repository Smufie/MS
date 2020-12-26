package com.mailsender.messaging;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mailsender.messaging.exceptions.SenderStrategyNotFoundException;

@Component
class SenderFactory {
	@Autowired
	private MailSender mail;
	@Autowired
	private SMSSender sms;

	MessageSender getSender(SenderType senderType) throws SenderStrategyNotFoundException {
		switch (senderType) {
		case MAIL:
			return mail;
		case SMS:
			return sms;
		default:
			throw new SenderStrategyNotFoundException("Sender not found.");
		}
	}
}
