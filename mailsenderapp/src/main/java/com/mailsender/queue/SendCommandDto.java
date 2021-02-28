package com.mailsender.queue;

import java.util.List;

import com.mailsender.messaging.RecipientDto;
import com.mailsender.messaging.SenderType;

public class SendCommandDto {

	private List<RecipientDto> recipients;
	private String message;
	private SenderType senderType = SenderType.MAIL;

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

	public SenderType getSenderType() {
		return senderType;
	}

	public void setSenderType(SenderType senderType) {
		this.senderType = senderType;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
