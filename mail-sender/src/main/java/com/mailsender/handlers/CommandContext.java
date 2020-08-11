package com.mailsender.handlers;

import com.mailsender.ClientRepository;
import com.mailsender.Queuer;

public interface CommandContext {

	ClientRepository clients();

	Queuer queuer();
	
}
