package com.mailsender.person;

public class PersonDto {

	private String name;
	private String mail;
	private String[] interests;
	private int id;	
	
	public PersonDto() {}

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

	public String[] getInterests() {
		return interests;
	}

	public void setInterests(String[] interests) {
		this.interests = interests;
	}

	public int getId() {
		return id;
	}
}