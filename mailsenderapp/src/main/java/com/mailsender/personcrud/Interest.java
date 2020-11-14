package com.mailsender.personcrud;

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
	private int interest_id;
	
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

	public int getInterest_id() {
		return interest_id;
	}
	
	public void setInterest_id(int interest_id) {
		this.interest_id = interest_id;
	}

	public InterestDto translateToDto() {
		InterestDto dto = new InterestDto(this.interest, this.interest_id);
		return dto;
	}
}
	
	