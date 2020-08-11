package com.mailsender.handlers;

public class DeleteInterestFromClientCommandHandler implements CommandHandler {

	public void handleCommand(String commandContent, CommandContext context) {
		int seperatorIndex = commandContent.indexOf(';');
		String mail = commandContent.substring(0, seperatorIndex);
		String interest = commandContent.substring(seperatorIndex + 1);
		context.clients().deleteInterestFromClient(mail, interest);
	}
}
