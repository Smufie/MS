package com.mailsender.person;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Before;
import org.junit.Test;

public class PersonTest {
	private Integer testId = TestConst.getPersonTestPersonId();
	private String testName = TestConst.getPersonTestPersonName();
	private String testMail = TestConst.getPersonTestPersonMail();
	private List<Interest> testInterests = TestConst.getPersonTestPersonInterests();

	private Person person = new Person();

	@Before
	void setupPerson() {
		// GIVEN
		person.setId(testId);
		person.setName(testName);
		person.setMail(testMail);
		person.assignInterests(testInterests);
	}

	@Test
	public void shouldTranslateToDto() {
		// WHEN
		PersonDto dto = person.translateToDto();
		// THEN
		assertEquals(person.getId(), dto.getId());
		assertEquals(person.getName(), dto.getName());
		assertEquals(person.getMail(), dto.getMail()); // TODO interests?
		assertEquals(person.getId(), dto.getId());
	}
}
