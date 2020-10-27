package com.mailsender.exceptions;

public class InvalidMailException extends Exception{	
	
	private static final long serialVersionUID = 1L;
	
	public InvalidMailException(String message) {
		super(message);
	}
}
