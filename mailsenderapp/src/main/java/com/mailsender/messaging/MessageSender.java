package com.mailsender.messaging;

import javax.mail.MessagingException;

interface MessageSender {

	void sendMessage(RecipientDto recipient, String message) throws MessagingException;

	SenderType getStrategy();
}