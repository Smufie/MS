package com.mailsender.providers;

import java.io.IOException;

import com.mailsender.handlers.CommandContext;

public interface NewCommandListener {

	void onNewCommand(String commandLine, CommandContext context) throws IOException;
	
}
