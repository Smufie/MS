package com.mailsender.config;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.mailsender.messaging.exceptions.SenderStrategyNotFoundException;
import com.mailsender.person.exceptions.InterestNotFoundException;
import com.mailsender.person.exceptions.InvalidMailException;
import com.mailsender.person.exceptions.PersonNotFoundException;

@RestControllerAdvice
public class CustomExceptionHandler {

	@ResponseStatus(value = HttpStatus.NOT_ACCEPTABLE, reason = "Forbidden mailbox.")
	@ExceptionHandler(InvalidMailException.class)
	public InvalidMailException handleInvalidMailException(InvalidMailException exception) {
		return exception;
	}

	@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Person with given id not found.")
	@ExceptionHandler(PersonNotFoundException.class)
	public PersonNotFoundException handlePersonNotFoundException(PersonNotFoundException exception) {
		return exception;
	}

	@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Sender not found.")
	@ExceptionHandler(SenderStrategyNotFoundException.class)
	public SenderStrategyNotFoundException handleSenderStrategyNotFoundException(
			SenderStrategyNotFoundException exception) {
		return exception;
	}

	@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Interest not found.")
	@ExceptionHandler(InterestNotFoundException.class)
	public InterestNotFoundException handleInterestNotFoundException(InterestNotFoundException exception) {
		return exception;
	}
}
