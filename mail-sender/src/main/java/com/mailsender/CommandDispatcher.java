package com.mailsender;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import com.mailsender.handlers.AddClientCommandHandler;
import com.mailsender.handlers.AddInterestToClientCommandHandler;
import com.mailsender.handlers.CommandContext;
import com.mailsender.handlers.CommandHandler;
import com.mailsender.handlers.CommandNotFoundHandler;
import com.mailsender.handlers.DeleteClientCommandHandler;
import com.mailsender.handlers.DeleteInterestFromClientCommandHandler;
import com.mailsender.handlers.EmptyCommandHandler;
import com.mailsender.handlers.SendCommandHandler;

public class CommandDispatcher {

	private Map<String, CommandHandler> handlers = new HashMap<String, CommandHandler>();
	private final CommandNotFoundHandler defaultHandler = new CommandNotFoundHandler();
	private final CommandHistorySaver saver = new CommandHistorySaver();
	
	public CommandDispatcher() {
		fillMapWithHandlers();
	}
		
	public void dispatchCommand(String commandString, CommandContext context) throws IOException {
		saver.SaveCommandHistory(commandString);
		Command command = new Command(commandString);
		String commandId = command.getId();
		String commandContent = command.getContent();
		CommandHandler commandHandler = handlers.getOrDefault(commandId, defaultHandler);
		commandHandler.handleCommand(commandContent, context);
	}

	private void fillMapWithHandlers() {
		handlers.put("/addclient", new AddClientCommandHandler());
		handlers.put("/addinterest", new AddInterestToClientCommandHandler());
		handlers.put("/deleteclient", new DeleteClientCommandHandler());
		handlers.put("/deleteinterest", new DeleteInterestFromClientCommandHandler());
		handlers.put("/send", new SendCommandHandler());
		handlers.put("", new EmptyCommandHandler());
	}

	
}
