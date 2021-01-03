package com.mailsender.messaging;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.mailsender.GlobalTestConst;

@RunWith(SpringRunner.class)
@SpringBootTest
class SendCommandServiceTestIT {

	@Autowired
	SendCommandService service;
	@MockBean
	private MailSender mailSender;

	@Test
	void shouldReturnCorrectNumberOfRecipients() throws Exception {
		// GIVEN
		List<RecipientDto> recipients = new ArrayList<RecipientDto>();
		recipients.add(new RecipientDto(GlobalTestConst.getTestPersonMail(), GlobalTestConst.getTestPersonName()));
		SendCommandDto command = new SendCommandDto(recipients, GlobalTestConst.getTestMessage());
		// WHEN
		ResponseEntity<Integer> response = service.sendMessageToRecipients(command);
		// THEN
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(1, response.getBody());
	}
}
