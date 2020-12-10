package com.mailsender.person;

import java.util.List;

public class MessageDto {
	private List<Integer> interestIds;
	private String message;

	public MessageDto() {
	};

	public MessageDto(List<Integer> interestsIds, String message) {
		this.interestIds = interestsIds;
		this.message = message;
	}

	public List<Integer> getInterestIds() {
		return interestIds;
	}

	public void setInterestIds(List<Integer> interestIds) {
		this.interestIds = interestIds;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
