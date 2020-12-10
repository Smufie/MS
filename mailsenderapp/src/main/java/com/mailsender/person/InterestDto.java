package com.mailsender.person;

public class InterestDto {

	private int interestId;
	private String interest;
	
	public InterestDto() {}
	
	public InterestDto(int interestId) {
		this.interestId = interestId;
	}
	
	public InterestDto(String interest) {
		this.interest = interest;
	}
	
	public InterestDto(String interest, int interestId) {
		this.interest = interest;
		this.interestId = interestId;
	}
	public int getInterestId() {
		return interestId;
	}
	public void setInterestId(int interestId) {
		this.interestId = interestId;
	}
	public String getInterest() {
		return interest;
	}
	public void setInterest(String interest) {
		this.interest = interest;
	}
}
