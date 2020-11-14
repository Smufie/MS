package com.mailsender.personcrud;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class PersonDto {

	private String name;
	private String mail;
	private Set<InterestDto> interests;
	private int id;	
	
	public PersonDto() {}
	
	public PersonDto(String name, String mail, Set<InterestDto> interests, int id) {
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

	public Set<InterestDto> getInterests() {
		return interests;
	}
	
	public List<Integer> getInterestsIds() {
		List<Integer> interestsIds = new ArrayList<Integer>();
		for (InterestDto interest : interests) {
			interestsIds.add(interest.getInterest_id());
		}
		return interestsIds;
	}

	public void setInterests(Set<InterestDto> set) {
		this.interests = set;
	}

	public void addInterest(InterestDto interest) {
		this.interests.add(interest);
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
}