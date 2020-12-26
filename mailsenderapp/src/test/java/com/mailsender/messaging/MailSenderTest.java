package com.mailsender.messaging;

import static org.junit.Assert.assertEquals;

import java.io.IOException;

import javax.mail.Message;
import javax.mail.MessagingException;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.mailsender.GlobalTestConst;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MailSenderTest {

	@Autowired
	MailSender sender;

	@Test
	public void shouldBuildProperMessage() throws IOException, MessagingException {
		// GIVEN
		RecipientDto recipient = new RecipientDto(GlobalTestConst.getTestPersonMail(),
				GlobalTestConst.getTestPersonName());
		// WHEN
		Message builtMessage = sender.buildMessage(recipient, GlobalTestConst.getTestMessage());
		// THEN
		assertEquals(builtMessage.getContent(), GlobalTestConst.getTestMessage());
		assertEquals(builtMessage.getSubject(), "Hello " + recipient.getName() + "!");
		assertEquals(builtMessage.getAllRecipients().length, 1);
		assertEquals(builtMessage.getAllRecipients()[0].toString(), GlobalTestConst.getTestPersonMail());
	}

	@Test
	public void shouldBeMailStrategy() {
		// THEN
		assertEquals(SenderType.MAIL, sender.getStrategy());
	}
}
