package com.mailsender.mailsenderapp;

class Person {

	static private Integer idCounter = 0;
	private Integer id;
	private String name;

	public Person() {
		id = idCounter++;
	}
	
	public Person(String name) {
		this.name = name;
		id = idCounter++;
	}

	public Integer getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public void setId(int id) {
		this.id = id;
	}
}