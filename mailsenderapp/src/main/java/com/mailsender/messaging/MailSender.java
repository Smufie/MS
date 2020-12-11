package com.mailsender.messaging;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class MailSender implements MessageSender {

	Properties properties = new Properties();

	@Value("${mailhandler.mailboxadress}")
	private String mailboxAdress;
	@Value("${mailhandler.password}")
	private String password;
	private Session session;

	public MailSender() {
		session = Session.getInstance(properties);
	}

	public Message buildMessage(RecipientDto recipient, String message) throws AddressException, MessagingException {
		Message builtMessage = new MimeMessage(session);
		builtMessage.setFrom(new InternetAddress(mailboxAdress));
		builtMessage.setText(message);
		builtMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(recipient.getAdress()));
		builtMessage.setSubject("Hello " + recipient.getName() + "!");
		return builtMessage;
	}

	@Override
	public void sendMessage(RecipientDto recipient, String message) throws MessagingException {
		Message mail = this.buildMessage(recipient, message);
		Transport.send(mail, mailboxAdress, password);

	}

	@Override
	public SenderStrategy getStrategy() {
		return SenderStrategy.MAIL;
	}
}
