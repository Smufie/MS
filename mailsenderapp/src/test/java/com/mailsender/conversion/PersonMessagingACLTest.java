package com.mailsender.conversion;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import com.mailsender.messaging.SendCommandDto;
import com.mailsender.person.PersonDto;

public class PersonMessagingACLTest {

	private static final Integer TEST_PERSON_ID = new Integer(123);
	private static final String TEST_PERSON_NAME = "Test Test";
	private static final String TEST_PERSON_MAIL = "test@testmail.com";
	private static final String TEST_MESSAGE = "Test message.";

	PersonMessagingACL converter = new PersonMessagingACL();

	@Test
	public void shouldConvertPersonsToSendCommand() {
		// given
		List<Integer> interests = new ArrayList<Integer>();
		interests.add(0);

		List<PersonDto> persons = new ArrayList<PersonDto>();
		persons.add(new PersonDto(TEST_PERSON_NAME, TEST_PERSON_MAIL, interests, TEST_PERSON_ID));
		// when
		SendCommandDto sendCommand = converter.convertPersonsToSendCommand(persons, TEST_MESSAGE);
		// then
		assertEquals(TEST_MESSAGE, sendCommand.getMessage());
		assertEquals(1, sendCommand.getRecipients().size());
		assertEquals(TEST_PERSON_MAIL, sendCommand.getRecipients().get(0).getAdress());
		assertEquals(TEST_PERSON_NAME, sendCommand.getRecipients().get(0).getName());
	}

}
