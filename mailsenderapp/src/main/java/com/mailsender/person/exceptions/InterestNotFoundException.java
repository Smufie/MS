package com.mailsender.person.exceptions;

public class InterestNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public InterestNotFoundException(String message) {
		super(message);
	}
}
