package com.mailsender.providers;

import java.io.IOException;

import com.mailsender.handlers.CommandContext;

public interface CommandProvider {

	void start(CommandContext context) throws IOException, InterruptedException;
	
}
