package com.mailsender.handlers;

import java.util.ArrayList;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.mailsender.Client;
import com.mailsender.MailQueue;

public class SendCommandHandler implements CommandHandler {

	private MailQueue mailQueue = new MailQueue();
	private static final Logger logger = LogManager.getLogger(SendCommandHandler.class);

	public void handleCommand(String commandContent, CommandContext context) {
		int seperatorIndex = commandContent.indexOf(';');
		String interest = commandContent.substring(0, seperatorIndex);
		String messageContent = commandContent.substring(seperatorIndex + 1);
		
		logger.info("Sending message to clients with interest: " + interest + ".");
		
		ArrayList<Client> foundClients = context.clients().findClientsWtihInterest(interest);
		
		context.queuer().queue(foundClients);
		
		try {
			mailQueue.handleQueue(messageContent, context.clients());
		} catch (InterruptedException e) {
			throw new RuntimeException(e);
		}
	}	
}
