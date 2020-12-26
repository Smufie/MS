package com.mailsender.messaging;

import static org.junit.Assert.assertEquals;

import org.junit.jupiter.api.Test;

class SMSSenderTest {

	SMSSender sender = new SMSSender();

	@Test
	public void shouldBeSMSStrategy() {
		// THEN
		assertEquals(SenderType.SMS, sender.getStrategy());
	}

}
