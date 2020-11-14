package com.mailsender.personcrud;

import static org.junit.Assert.*;

import org.junit.Test;

import com.mailsender.exceptions.InvalidMailException;
import com.mailsender.personcrud.MailValidator;

public class MailValidatorTest {
	
	@Test
	public void shouldRecognizeFalseMail() {
		assertThrows(InvalidMailException.class, () -> {
			MailValidator.validate("john@example.com");
		});
	}
}
