package com.mailsender.person;

import java.util.ArrayList;
import java.util.List;

public class PersonDto {

	private String name;
	private String mail;
	private List<Integer> interests = new ArrayList<Integer>();
	private Integer id;	
	
	public PersonDto() {}
	
	public PersonDto(String name, String mail, List<Integer> interests, Integer id) {
		this.name = name;
		this.mail = mail;
		this.interests = interests;
		this.id = id;
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

	public List<Integer> getInterests() {
		return interests;
	}

	public void setInterests(List<Integer> interests) {
		this.interests = interests;
	}

	public void addInterest(Integer interest) {
		this.interests.add(interest);
	}
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
}