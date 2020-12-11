package com.mailsender.messaging;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.mailsender.messaging.exceptions.SenderStrategyNotFoundException;

public class SenderFactoryTest {

	SenderFactory factory = new SenderFactory();

	@Test
	public void shouldReturnMailSender() throws SenderStrategyNotFoundException {
		// GIVEN
		MessageSender sender = factory.getSender(SenderStrategy.MAIL);
		// WHEN
		SenderStrategy strategy = sender.getStrategy();
		// THEN
		assertEquals(SenderStrategy.MAIL, strategy);

	}

	@Test
	public void shouldReturnSmsSender() throws SenderStrategyNotFoundException {
		// GIVEN
		MessageSender sender = factory.getSender(SenderStrategy.SMS);
		// WHEN
		SenderStrategy strategy = sender.getStrategy();
		// THEN
		assertEquals(SenderStrategy.SMS, strategy);

	}

}
