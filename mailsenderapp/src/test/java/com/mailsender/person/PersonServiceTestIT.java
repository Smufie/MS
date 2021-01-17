package com.mailsender.person;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.mailsender.GlobalTestConst;
import com.mailsender.person.exceptions.InvalidMailException;

@RunWith(SpringRunner.class)
@SpringBootTest
class PersonServiceTestIT {

	private PersonDto testPerson = new PersonDto(GlobalTestConst.getTestPersonName(),
			GlobalTestConst.getTestPersonMail(), PersonTestConst.getPersonTestPersonInterestsDto(),
			GlobalTestConst.getTestPersonId());

	@Autowired
	PersonService service;
	@MockBean
	private PersonRepository persons;
	@MockBean
	private InterestRepository interests;

	@Test
	public void shouldAddReturnCorrectPerson() {
		// GIVEN
		when(interests.findAllById(testPerson.getInterestsIds()))
				.thenReturn(PersonTestConst.getPersonTestPersonInterests());

		when(persons.save(any(Person.class))).thenReturn(null);

		// WHEN
		PersonDto response = service.add(testPerson);

		// THEN
		assertNotNull(response);
		assertEquals(testPerson, response);
	}

	@Test
	public void shouldThrowInvalidMailException() {
		// GIVEN
		PersonDto falsePerson = new PersonDto(testPerson.getName(), "john@example.com", testPerson.allInterestDtos(),
				testPerson.getId());
		// THEN
		assertThrows(InvalidMailException.class, () -> {
			// WHEN
			service.add(falsePerson);
		});
	}

	@Test
	public void shouldEditReturnCorrectPerson() {
		// GIVEN
		Person entity = new Person();
		when(interests.findAllById(testPerson.getInterestsIds()))
				.thenReturn(PersonTestConst.getPersonTestPersonInterests());

		when(persons.save(any(Person.class))).thenReturn(null);
		when(persons.findById(123)).thenReturn(Optional.of(entity));
		// WHEN
		PersonDto response = service.edit(testPerson);
		// THEN
		assertNotNull(response);
		assertEquals(testPerson, response);
	}

	@Test
	public void shouldDeleteReturnCorrectId() {
		// GIVEN
		Person entity = new Person();

		when(persons.findById(123)).thenReturn(Optional.of(entity));
		// WHEN
		Integer response = service.delete(testPerson.getId());
		// THEN
		assertNotNull(response);
		assertEquals(testPerson.getId(), response);
	}
}
