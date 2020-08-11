package com.mailsender.handlers;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.mailsender.ClientInMemoryRepository;

public class CommandNotFoundHandler implements CommandHandler {

	private static final Logger logger = LogManager.getLogger(CommandNotFoundHandler.class);
	
	String commandID;
	
	public CommandNotFoundHandler() {
	}
	
	public CommandNotFoundHandler(String commandID) {
		this.commandID = commandID;
	}

	public void handleCommand(String commandContent, ClientInMemoryRepository clientCollection) {

	}

	public void handleCommand(String commandContent, CommandContext context) {
		logger.warn("Wrong command: " + commandID);
	}

}
