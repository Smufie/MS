package com.mailsender.person;

import java.util.ArrayList;
import java.util.List;

public class PersonDto {

	private String name;
	private String mail;
	private List<InterestDto> interests = new ArrayList<InterestDto>();
	private Integer id;

	public PersonDto() {
	}

	public PersonDto(String name, String mail, List<InterestDto> interests, Integer id) {
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

	public List<InterestDto> getInterests() {
		return interests;
	}

	public List<Integer> getInterestsIds() {
		List<Integer> interestsIds = new ArrayList<Integer>();
		for (InterestDto interest : this.interests) {
			interestsIds.add(interest.getInterestId());
		}
		return interestsIds;
	}

	public void setInterests(List<InterestDto> interests) {
		this.interests = interests;
	}

	public void addInterest(InterestDto interest) {
		this.interests.add(interest);
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
}