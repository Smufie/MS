package com.mailsender.person.exceptions;

public class InvalidMailException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public InvalidMailException(String message) {
		super(message);
	}
}
