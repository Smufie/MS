package com.mailsender;

import java.util.ArrayList;

public interface ClientRepository {
	public void addClient(String clientMail, String clientName);
	public void deleteClient(String clientMail);
	public void addInterestToClient(String clientMail, String interest);
	public void deleteInterestFromClient(String clientMail, String interest);
	public int findClientIndex(String clientMail);
	public int findInterestIndex(int clientIndex, String interest);
	public ArrayList<Client> findClientsWtihInterest(String interest);
}
