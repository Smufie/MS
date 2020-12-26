package com.mailsender.messaging;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.mailsender.messaging.exceptions.SenderStrategyNotFoundException;

public class SenderFactoryTest {

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

	// TODO TEST NA DEFAULT W SWITCHU
}
