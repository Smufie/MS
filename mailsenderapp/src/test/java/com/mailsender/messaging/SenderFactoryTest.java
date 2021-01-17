package com.mailsender.messaging;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.mailsender.messaging.exceptions.SenderStrategyNotFoundException;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SenderFactoryTest {

	@Autowired
	SenderFactory factory = new SenderFactory();

	@Test
	public void shouldReturnMailSender() throws SenderStrategyNotFoundException {
		// GIVEN
		MessageSender sender = factory.getSender(SenderType.MAIL);
		// WHEN
		SenderType strategy = sender.getStrategy();
		// THEN
		assertEquals(SenderType.MAIL, strategy);

	}

	@Test
	public void shouldReturnSmsSender() throws SenderStrategyNotFoundException {
		// GIVEN
		MessageSender sender = factory.getSender(SenderType.SMS);
		// WHEN
		SenderType strategy = sender.getStrategy();
		// THEN
		assertEquals(SenderType.SMS, strategy);

	}
}
