package com.mailsender.messaging;

import javax.mail.MessagingException;

import org.springframework.stereotype.Component;

@Component
public class SMSSender implements MessageSender {

	@Override
	public void sendMessage(RecipientDto recipient, String message) throws MessagingException {
		System.out.println("Sent sms message.");
	}

	@Override
	public SenderType getStrategy() {
		return SenderType.SMS;
	}

}
