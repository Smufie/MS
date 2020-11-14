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
import org.springframework.stereotype.Service;

import com.mailsender.personcrud.PersonDto;

@Service
class SendCommandService implements MessageSender {
	
	Properties properties = new Properties();
	
	@Value( "${sendcommandservice.mailboxadress}")
	private String mailboxAdress;
	@Value( "${sendcommandservice.password}")
	private String password;
	private Session session;

	public void setupSession() {
		session = Session.getInstance(properties);
	}

	public SendCommandService() {
		setupSession();
	}

	@Override
	public void sendMessageToRecipients(PersonDto person, String message) throws AddressException, MessagingException {
		Message mimeMessage = new MimeMessage(session);
		mimeMessage.setFrom(new InternetAddress(mailboxAdress));
		mimeMessage.setText(message);
		mimeMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(person.getMail()));
		mimeMessage.setSubject("Hello " + person.getName() + "!");
		Transport.send(mimeMessage, mailboxAdress, password);
	}
}
