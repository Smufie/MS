package com.mailsender;

import java.util.ArrayList;
import java.util.concurrent.ConcurrentLinkedQueue;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.mailsender.handlers.SendCommandHandler;

public class MailQueue implements Queuer {
	
	private static final Logger logger = LogManager.getLogger(SendCommandHandler.class);
	
	private ConcurrentLinkedQueue<Client> interesants = new ConcurrentLinkedQueue<Client>();
	
	public void handleQueue(String message, ClientRepository clientCollection) throws InterruptedException {
		
		MailSender sender = new MailSender();
		
		while (!interesants.isEmpty()) {
			
			Client current = interesants.poll();
			long currentMillis = System.currentTimeMillis();
			if (currentMillis - current.getLastMessage().getTime() < 3000) {
				logger.info("Sending message.");
				sender.sendMessage(message, current);
				
			} else {
				logger.info("Moving " + current.getMail() + " to beggining of queue to avoid spam.");
				interesants.add(current);
			}
		}
	}

	public void queue(ArrayList<Client> foundClients) {
		for (int i = 0; i < foundClients.size(); i++) {
			interesants.add(foundClients.get(i));
		}
	}
}
