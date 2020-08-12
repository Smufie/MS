package com.mailsender;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

public class MailSender implements MessageSender {

	Properties properties = new Properties();
	final String from = "javatest768@gmail.com";
	final String password = "javatest4j";
	private Session session;
	private Logger logger = LogManager.getLogger(MailSender.class);

	public void setupProperties() {
		properties.put("mail.smtp.starttls.enable", "true");
		properties.put("mail.smtp.host", "smtp.gmail.com");
		properties.put("mail.smtp.port", "587");
	}

	public void setupSession() {
		session = Session.getInstance(properties);
	}

	public MailSender() {
		setupProperties();
		setupSession();
	}

	public void sendMessage(String message, Client client) {
		try {
			Message mimeMessage = new MimeMessage(session);
			mimeMessage.setFrom(new InternetAddress(from));
			mimeMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(client.getMail()));
			mimeMessage.setSubject("Hello " + client.getName() + "!");
			mimeMessage.setText(message);
			Transport.send(mimeMessage, from, password);
			client.updateDate();

			logger.info("Message sent successfully to " + client.getMail() + ".");

		} catch (MessagingException mex) {
			throw new RuntimeException(mex);
		}

	}

}
