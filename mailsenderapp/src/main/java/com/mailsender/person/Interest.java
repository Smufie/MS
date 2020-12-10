package com.mailsender.person;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "interests")
class Interest {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "interest_id")
	private int interestId;
	
	@Column(name = "interest")
	private String interest;
	
	@ManyToMany(mappedBy = "interests")
	private Set<Person> persons = new HashSet<>();

	
	public Interest() {};
	
	public String getInterest() {
		return interest;
	}

	public void setInterest(String interest) {
		this.interest = interest;
	}

	public void setPersons(Set<Person> persons) {
		this.persons = persons;
	}

	public int getInterestId() {
		return interestId;
	}
	
	public void setInterestId(int interestId) {
		this.interestId = interestId;
	}

	public InterestDto translateToDto() {
		InterestDto dto = new InterestDto(this.interest, this.interestId);
		return dto;
	}
}
	
	