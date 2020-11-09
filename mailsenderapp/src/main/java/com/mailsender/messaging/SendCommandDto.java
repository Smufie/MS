package com.mailsender.messaging;

import java.util.List;

public class SendCommandDto {
	
	private List<Integer> interests;
	private String message;	
	
	public SendCommandDto() {}

	public List<Integer> getInterests() {
		return interests;
	}

	public void setInterests(List<Integer> interests) {
		this.interests = interests;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
