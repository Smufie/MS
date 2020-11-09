package com.mailsender.messaging;

import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import com.mailsender.personcrud.Person;

public interface MessageSender {

	void sendMessageToRecipients(List<Person> persons, String message) throws AddressException, MessagingException;	
	
}