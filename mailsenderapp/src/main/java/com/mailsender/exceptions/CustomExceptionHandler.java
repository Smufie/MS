package com.mailsender.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CustomExceptionHandler {

	@ResponseStatus(value=HttpStatus.FORBIDDEN, reason = "Forbidden mailbox.")
	@ExceptionHandler(InvalidMailException.class)
	public InvalidMailException handleInvalidMailException(InvalidMailException exception) {
		return exception;
	}

	@ResponseStatus(value=HttpStatus.NOT_FOUND, reason = "Person with given id not found.")
	@ExceptionHandler(PersonNotFoundException.class)
	public PersonNotFoundException handlePersonNotFoundException(PersonNotFoundException exception) {
		return exception;
	}
}
