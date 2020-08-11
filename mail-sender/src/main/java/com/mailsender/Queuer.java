package com.mailsender;

import java.util.ArrayList;

public interface Queuer {
	public void queue(ArrayList<Client> foundClients);
}
