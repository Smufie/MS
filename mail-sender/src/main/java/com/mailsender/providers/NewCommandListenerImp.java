package com.mailsender.providers;

import java.io.IOException;

import com.mailsender.CommandDispatcher;
import com.mailsender.handlers.CommandContext;

public class NewCommandListenerImp implements NewCommandListener {
	
	private final CommandDispatcher dispatcher = new CommandDispatcher();
	
	public void onNewCommand(String commandLine, CommandContext context) throws IOException {

		dispatcher.dispatchCommand(commandLine, context);

	}

}
