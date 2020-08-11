package com.mailsender;

public class Command {

	private static final char COMMAND_NAME_SEPARATOR = ' ';
	private final String content;
	private final String id;

	public Command(String commandString) {
		int separatorIndex = commandString.indexOf(COMMAND_NAME_SEPARATOR);
		boolean separatorIndexExists = separatorIndex > 0;
		if (separatorIndexExists) {
			id = commandString.substring(0, separatorIndex);
			content = commandString.substring(separatorIndex + 1);
		} else {
			id = "";
			content = "";
		}
	}

	public String getContent() {
		return content;
	}

	public String getId() {
		return id;
	}	

	
}
