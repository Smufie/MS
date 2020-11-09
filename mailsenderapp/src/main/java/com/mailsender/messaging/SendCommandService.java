package com.mailsender.messaging;

import java.util.List;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;

import com.mailsender.personcrud.Person;

@Service
public class SendCommandService implements MessageSender {
	
	Properties properties = new Properties();
	final String from = "javatest768@gmail.com";
	final String password = "javatest4j";
	private Session session;

	public void setupProperties() {
		properties.put("mail.smtp.starttls.enable", "true");
		properties.put("mail.smtp.host", "smtp.gmail.com");
		properties.put("mail.smtp.port", "587");
	}

	public void setupSession() {
		session = Session.getInstance(properties);
	}

	public SendCommandService() {
		setupProperties();
		setupSession();
	}

	@Override
	public void sendMessageToRecipients(List<Person> persons, String message) throws AddressException, MessagingException {
		// TODO przemodeluj
		while(!persons.isEmpty()) {
			Person person = persons.remove(0);
			Message mimeMessage = new MimeMessage(session);
			mimeMessage.setFrom(new InternetAddress(from));
			mimeMessage.setText(message);
			mimeMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(person.getMail()));
			mimeMessage.setSubject("Hello " + person.getName() + "!");
			Transport.send(mimeMessage, from, password);
		}
	}
}
