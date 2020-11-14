package com.mailsender.personcrud;

public class InterestDto {

	private int interest_id;
	private String interest;
	
	public InterestDto(String interest, int interest_id) {
		this.interest = interest;
		this.interest_id = interest_id;
	}
	public int getInterest_id() {
		return interest_id;
	}
	public void setInterest_id(int interest_id) {
		this.interest_id = interest_id;
	}
	public String getInterest() {
		return interest;
	}
	public void setInterest(String interest) {
		this.interest = interest;
	}
}
