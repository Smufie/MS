package com.mailsender.person;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Before;
import org.junit.Test;

import com.mailsender.GlobalTestConst;

public class PersonTest {
	private Integer testId = GlobalTestConst.getTestPersonId();
	private String testName = GlobalTestConst.getTestPersonName();
	private String testMail = GlobalTestConst.getTestPersonMail();
	private List<Interest> testInterests = PersonTestConst.getPersonTestPersonInterests();

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
		assertEquals(person.getMail(), dto.getMail());
	}
}
