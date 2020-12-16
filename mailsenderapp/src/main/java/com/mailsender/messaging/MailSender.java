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

	Properties properties;

	@Value("${mailsender.mailboxadress}")
	private String mailboxAdress;
	@Value("${mailsender.password}")
	private String password;
	@Value("${mailsender.host}")
	private String host;
	private Session session;

	public MailSender() {
		properties = System.getProperties();

		properties.put("mail.smtp.host", host);
		properties.put("mail.smtp.port", "465");
		properties.put("mail.smtp.ssl.enable", "true");
		properties.put("mail.smtp.auth", "true");
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
		Transport transport = session.getTransport("smtp");
		transport.connect(host, mailboxAdress, password);
		transport.sendMessage(mail, mail.getAllRecipients());

	}

	@Override
	public SenderStrategy getStrategy() {
		return SenderStrategy.MAIL;
	}
}
