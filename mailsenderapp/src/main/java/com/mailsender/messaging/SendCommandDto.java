package com.mailsender.messaging;

import java.util.List;

public class SendCommandDto {

	private List<RecipientDto> recipients;
	private String message;

	public SendCommandDto(List<RecipientDto> recipients, String message) {
		this.recipients = recipients;
		this.message = message;
	}

	public SendCommandDto() {
	};

	public List<RecipientDto> getRecipients() {
		return recipients;
	}

	public void setRecipients(List<RecipientDto> recipients) {
		this.recipients = recipients;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
