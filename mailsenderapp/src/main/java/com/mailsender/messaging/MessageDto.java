package com.mailsender.messaging;

public class MessageDto {

	private String message;
	private RecipientDto recipient;
	private SenderType type;

	public MessageDto() {

	};

	public MessageDto(String message, RecipientDto recipient, SenderType type) {
		this.message = message;
		this.recipient = recipient;
		this.type = type;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public RecipientDto getRecipient() {
		return recipient;
	}

	public void setRecipient(RecipientDto recipient) {
		this.recipient = recipient;
	}

	public SenderType getType() {
		return type;
	}
}
