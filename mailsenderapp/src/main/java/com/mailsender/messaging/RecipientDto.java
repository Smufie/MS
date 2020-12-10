package com.mailsender.messaging;

public class RecipientDto {
	
	private String adress;
	private String name;

	public RecipientDto(String adress, String name) {
		this.adress = adress;
		this.name = name;
	}
	
	public String getAdress() {
		return adress;
	}
	public void setAdress(String adress) {
		this.adress = adress;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
