package com.mailsender.handlers;

public interface CommandHandler {
	
	void handleCommand(String commandContent, CommandContext context);
}
