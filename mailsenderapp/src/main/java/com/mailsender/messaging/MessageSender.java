package com.mailsender.messaging;

import javax.mail.MessagingException;

public interface MessageSender {

	void sendMessage(RecipientDto recipient, String message) throws MessagingException;

}