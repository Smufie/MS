package com.mailsender.messaging.exceptions;

public class SenderStrategyNotFoundException extends Exception {
	private static final long serialVersionUID = 1L;

	public SenderStrategyNotFoundException(String message) {
		super(message);
	}
}
