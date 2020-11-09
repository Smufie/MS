package com.mailsender.personcrud;

import java.util.List;

class PersonDto {

	private String name;
	private String mail;
	private List<Integer> interests;
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

	public List<Integer> getInterests() {
		return interests;
	}

	public void setInterests(List<Integer> interests) {
		this.interests = interests;
	}

	public int getId() {
		return id;
	}
}