package com.mailsender.mailsenderapp;

import com.fasterxml.jackson.annotation.JsonSetter;

class Person {

	static private int idCounter = 0;
	private final int id;
	private String name;

	public Person() {
		id = idCounter++;
	}
	
	public Person(String name) {
		this.name = name;
		id = idCounter++;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	@JsonSetter
	public void setName(String name) {
		this.name = name;
	}
}