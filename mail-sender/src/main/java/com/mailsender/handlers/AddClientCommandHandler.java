package com.mailsender.handlers;

public class AddClientCommandHandler implements CommandHandler {	

	public void handleCommand(String commandContent, CommandContext context) {
		int seperatorIndex = commandContent.indexOf(';');
		String name = commandContent.substring(0, seperatorIndex);
		String mail = commandContent.substring(seperatorIndex + 1);
		context.clients().addClient(name, mail);
	}

}
