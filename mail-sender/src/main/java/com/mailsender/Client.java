package com.mailsender;

import java.util.ArrayList;
import java.util.Date;

public class Client {
	private String name;
	private String mail;
	private Date lastMessage;
	private ArrayList <String> interest = new ArrayList<String>();
	
	
	
	public Date getLastMessage() {
		return lastMessage;
	}

	public void setLastMessage(Date lastMessage) {
		this.lastMessage = lastMessage;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getInterest(int index) {
		return interest.get(index);
	}
	
	public ArrayList<String> getInterest() {
		return interest;
	}

	public void setInterest(String interest) {
		this.interest.add(interest);
	}
	
	public void deleteInterest(int index) {
		this.interest.remove(index);
	}

	public Client() {
		this.name = "";
		this.mail = "";
		interest.add("");
	}
	
	public Client(String name, String mail) {
		this.name = name;
		this.mail = mail;
		interest.add("");
		lastMessage = new Date(System.currentTimeMillis());
		
	}
	
	public Client(String name, String mail, String interest) {
		this.name = name;
		this.mail = mail;
		this.interest.add(interest);
	}
	
	public void updateDate() {
		lastMessage = new Date(System.currentTimeMillis());
	}

}


