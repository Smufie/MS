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

	MessageSender getSender(SenderStrategy strategy) throws SenderStrategyNotFoundException {
		switch (strategy) {
		case MAIL:
			return mail;
		case SMS:
			return sms;
		default:
			throw new SenderStrategyNotFoundException("Sender not found."); // Czy w aktualnej architekturze jest w
																			// ogóle możliwe żeby takie coś miało
																			// miejsce?
		}
	}
}
