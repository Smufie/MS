package com.mailsender.messaging;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import com.mailsender.personcrud.PersonDto;

public interface MessageSender {

	void sendMessageToRecipients(PersonDto person, String message) throws AddressException, MessagingException;	
	
}