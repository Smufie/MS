package com.mailsender;

import java.util.ArrayList;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

public class ClientInMemoryRepository implements ClientRepository {
	
	private static final Logger logger = LogManager.getLogger(ClientInMemoryRepository.class);
	
	//TODO: ZMIEN NA LISTE
	private ArrayList<Client> allClientsData = new ArrayList<Client>();
	
	
	public ClientInMemoryRepository() {
		allClientsData.add(new Client("", ""));
	}
	
	public ArrayList<Client> getAllClientsData() {
		return allClientsData;
	}

	public void addClient(String clientName, String clientMail) {
		logger.info("Adding client: " + clientName + "; " + clientMail + ".");
		int clientIndex = this.findClientIndex(clientMail);
		if (clientIndex == -1) {
			allClientsData.add(new Client(clientName, clientMail));
			logger.info("Client with mail: " + clientMail + " successfully added.");
		} else {
			logger.error("Client with mail: " + clientMail + " already exists.");
		}
	}
	
	public void deleteClient(String clientMail) {
		logger.info("Trying to delete client: " + clientMail + ".");
		int clientIndex = this.findClientIndex(clientMail);	
		if(clientIndex != -1) {
			allClientsData.remove(clientIndex);
			logger.info("Client: " + clientMail + " successfully deleted.");
		} else {
			logger.error("Client with mail: " + clientMail + " doesn't exist.");
		}
	}

	public int findClientIndex(String clientMail) {
		int clientIndex = -1;
		for (int i = 0; i < allClientsData.size(); i++) {
			if (allClientsData.get(i).getMail().equals(clientMail)) {
				clientIndex = i;
				break;
			}
		}
		return clientIndex;
	}
	
	public void addInterestToClient(String clientMail, String interest) {
		logger.info("Adding interest: " + interest + " to client: " + clientMail + ".");
		int clientIndex = this.findClientIndex(clientMail);
		if (clientIndex != -1) {
			allClientsData.get(clientIndex).setInterest(interest);
			logger.info("Interest: " + interest + " successfully add to client: " + clientMail + ".");
		} else {
			logger.error("Client with mail: " + clientMail + " doesn't exist.");
		}
		
	}
	
	public void deleteInterestFromClient(String clientMail, String interest) {
		logger.info("Deleting interest: " + interest + " from client " + clientMail + ".");
		int clientIndex = this.findClientIndex(clientMail);
		int interestIndex = this.findInterestIndex(clientIndex, interest);
		if (clientIndex != -1 && interestIndex != -1) {
			allClientsData.get(clientIndex).deleteInterest(interestIndex);
			logger.info("Interest: " + interest + " successfully deleted from client: " + clientMail +".");
		}
		
		if (clientIndex == -1) {
			logger.error("Client with mail: " + clientMail + " doesn't exist.");
		} else {
			if (clientIndex == -1) {
				logger.error("Client with mail: " + clientMail + " has no interest like: " + interest + "." );
			}
		}
		
	}

	public ArrayList<Client> findClientsWtihInterest(String interest) {
		ArrayList<Client> foundClients = new ArrayList<Client>();
		for (int i = 0; i < allClientsData.size(); i++) {
			for (int y = 0; y < allClientsData.get(i).getInterest().size(); y++) {
				if (allClientsData.get(i).getInterest().get(y).equals(interest)) {
					foundClients.add(allClientsData.get(i));
				}
			}
		}
		return foundClients;
	}

	public int findInterestIndex(int clientIndex, String interest) {
		int interestIndex = -1;
		for (int i = 0; i < allClientsData.get(clientIndex).getInterest().size(); i++) {
			if (allClientsData.get(clientIndex).getInterest().get(i).equals(interest)) {
				interestIndex = i;
				break;
			}
		}
		return interestIndex;
	}
}
