package com.mailsender.conversion;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import com.mailsender.GlobalTestConst;
import com.mailsender.messaging.SendCommandDto;
import com.mailsender.person.PersonDto;

public class PersonMessagingACLTest {

	PersonMessagingACL converter = new PersonMessagingACL();

	@Test
	public void shouldConvertPersonsToSendCommand() {
		// GIVEN
		List<Integer> interests = new ArrayList<Integer>();
		interests.add(0);

		List<PersonDto> persons = new ArrayList<PersonDto>();
		persons.add(new PersonDto(GlobalTestConst.getTestPersonName(), GlobalTestConst.getTestPersonMail(), interests,
				GlobalTestConst.getTestPersonId()));
		// WHEN
		SendCommandDto sendCommand = converter.convertPersonsToSendCommand(persons, GlobalTestConst.getTestMessage());
		// THEN
		assertEquals(GlobalTestConst.getTestMessage(), sendCommand.getMessage());
		assertEquals(1, sendCommand.getRecipients().size());
		assertEquals(GlobalTestConst.getTestPersonMail(), sendCommand.getRecipients().get(0).getAdress());
		assertEquals(GlobalTestConst.getTestPersonName(), sendCommand.getRecipients().get(0).getName());
	}

}
