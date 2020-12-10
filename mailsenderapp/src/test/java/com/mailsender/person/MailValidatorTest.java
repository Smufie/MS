package com.mailsender.person;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;

import org.junit.Test;

import com.mailsender.person.exceptions.InvalidMailException;
import com.mailsender.utilities.MailValidator;

public class MailValidatorTest {

	@Test
	public void shouldRecognizeFalseMail() {
		// THEN
		assertThrows(InvalidMailException.class, () -> {
			// WHEN
			MailValidator.validate("john@example.com");
		});
	}

	@Test
	public void shouldApproveCorrectMail() throws InvalidMailException {
		// WHEN
		boolean isValid = MailValidator.validate("john@gmail.com");
		// THEN
		assertEquals(true, isValid);
	}
}
