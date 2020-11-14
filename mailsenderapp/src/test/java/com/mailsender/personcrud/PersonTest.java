package com.mailsender.personcrud;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

public class PersonTest {
	
	int testId = 0;
	String testName = "Test Test";
	String testMail = "test@testmail.com";
	List<Interest> testInterests = new ArrayList<Interest>();
	
	void initTestsInterests() {
		Interest testInterest = new Interest();
		testInterest.setInterest("test");
		testInterest.setInterest_id(0);
		testInterests.add(testInterest);
	}
	
	@Test
	public void shouldTranslateToDto() {
		Person person = new Person();
		person.setId(testId);
		person.setName(testName);
		person.setMail(testMail);
		person.assignInterests(testInterests);
		
		PersonDto dto = person.translateToDto();
		assertEquals(person.getId(), dto.getId());
		assertEquals(person.getName(), dto.getName());
		assertEquals(person.getMail(), dto.getMail()); //TODO interests?
		assertEquals(person.getId(), dto.getId());
	}
}
