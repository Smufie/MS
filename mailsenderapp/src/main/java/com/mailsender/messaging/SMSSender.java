package com.mailsender.messaging;

import javax.mail.MessagingException;

public class SMSSender implements MessageSender {

	@Override
	public void sendMessage(RecipientDto recipient, String message) throws MessagingException {
		System.out.println("Sent sms message.");
	}

}
