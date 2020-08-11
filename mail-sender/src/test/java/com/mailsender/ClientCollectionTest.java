package com.mailsender;

import static org.junit.Assert.*;

import java.util.ArrayList;

import org.junit.Test;

public class ClientCollectionTest {

	@Test
	public void test() {
		fail("Not yet implemented");
	}

	@Test
	public void addClient() {
		String clientMail = "admin";
		String clientName = "admin";
		ClientInMemoryRepository clientCollection = new ClientInMemoryRepository();
		clientCollection.addClient(clientMail, clientName);
		assertEquals("admin", clientCollection.getAllClientsData().get(0).getName());
		assertEquals("admin", clientCollection.getAllClientsData().get(0).getMail());
	}

	@Test
	public void deleteClient(String clientMail) {
		// TODO Auto-generated method stub
		
	}

	@Test
	public void addInterestToClient(String clientMail, String interest) {
		// TODO Auto-generated method stub
		
	}

	@Test
	public void deleteInterestFromClient(String clientMail, String interest) {
		// TODO Auto-generated method stub
		
	}

	@Test
	public int findClientIndex(String clientMail) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Test
	public int findInterestIndex(int clientIndex, String interest) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Test
	public ArrayList<Client> findClientsWtihInterest(String interest) {
		// TODO Auto-generated method stub
		return null;
	}

	@Test
	public void updateDate(String clientMail) {
		// TODO Auto-generated method stub
		
	}

	@Test
	public void addDate() {
		// TODO Auto-generated method stub
		
	}

}
