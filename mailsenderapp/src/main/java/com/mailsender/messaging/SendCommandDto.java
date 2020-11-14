package com.mailsender.messaging;

import java.util.List;

import com.mailsender.personcrud.InterestDto;

public class SendCommandDto {
	
	private List<InterestDto> interests;
	private String message;	
	
	public SendCommandDto() {}

	public List<InterestDto> getInterests() {
		return interests;
	}

	public void setInterests(List<InterestDto> interests) {
		this.interests = interests;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
