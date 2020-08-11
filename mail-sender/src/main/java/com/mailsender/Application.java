package com.mailsender;

import java.io.IOException;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.mailsender.handlers.CommandContext;
import com.mailsender.providers.FileInDirectoryCommandProvider;
import com.mailsender.providers.NewCommandListenerImp;

public class Application  {

	private static final Logger logger = LogManager.getLogger(Application.class);
	
	private static NewCommandListenerImp listener = new NewCommandListenerImp();
	
	private static CommandContext context;
	

	public Application() {
		final ClientInMemoryRepository clientCollection = new ClientInMemoryRepository();
		final MailQueue queue = new MailQueue();
		context = new CommandContext() {
			
			public Queuer queuer() {
				return queue;
			}
			
			public ClientRepository clients() {
				return clientCollection;
			}
		};
	}
	
	public static void main(String[] args) throws IOException, InterruptedException {
		logger.warn("Application start.");
		FileInDirectoryCommandProvider commandProvider = new FileInDirectoryCommandProvider(
				"C:\\Users\\Jan\\eclipse-workspace\\mail-sender\\THROW ORDERS HERE", listener);
		commandProvider.start(context);
	}
}