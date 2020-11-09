package com.mailsender.personcrud;

import static org.junit.Assert.*;

import org.junit.Test;

import com.mailsender.personcrud.MailValidator;

public class MailValidatorTest {
	
	@Test
	public void shouldRecognizeFalseMail() {
		boolean isValid = MailValidator.validate("john@example.com");
		assertFalse(isValid);
	}
	
	@Test
	public void shouldPassRightMail() {
		boolean isValid = MailValidator.validate("john@gmail.com");
		assertTrue(isValid);
	}
}
