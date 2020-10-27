package com.mailsender.person;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "persons")
public class Person {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "mail")
	private String mail;
	
	@Column(name = "last_message")
	private Date lastMessage;
	
	@ElementCollection
	@CollectionTable(name="interests")
	@Column(name = "interest")
	private List <String> interests = new ArrayList<String>();
	
	public Person() {};
	
	public Person(String name, String mail, String[] interests) {
		this.name = name;
		this.mail = mail;
		for (String interest : interests) {
			this.interests.add(interest);
		};
		lastMessage = new Date(System.currentTimeMillis());
	}
	
	public Date getLastMessage() {
		return lastMessage;
	}

	public void setLastMessage(Date lastMessage) {
		this.lastMessage = lastMessage;
	}

	public int getId() {
		return id;
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
		return interests.get(index);
	}
	
	public List<String> getInterest() {
		return interests;
	}

	public void setInterest(String[] interests) {
		this.interests.clear();
		for (String interest : interests) {
			this.interests.add(interest);
		}
	}
		
	public void deleteInterest(int index) {
		this.interests.remove(index);
	}
	
	public void updateDate() {
		lastMessage = new Date(System.currentTimeMillis());
	}

}


