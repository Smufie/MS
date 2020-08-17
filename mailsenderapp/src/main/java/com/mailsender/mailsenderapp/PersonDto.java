package com.mailsender.mailsenderapp;

class PersonDto {

	private final Integer id;
	private final String name;
	
	public PersonDto(Integer id, String name) {
		this.name = name;
		this.id = id;
	}

	public Integer getId() {
		return id;
	}

	public String getName() {
		return name;
	}
}