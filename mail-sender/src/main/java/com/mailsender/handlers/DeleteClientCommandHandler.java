package com.mailsender.handlers;

public class DeleteClientCommandHandler implements CommandHandler {

	public void handleCommand(String commandContent, CommandContext context) {
		context.clients().deleteClient(commandContent);
	}

}
