package com.mailsender.messaging;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@ComponentScan(basePackages = { "com.mailsender.person", "com.mailsender.messaging" })
@Configuration
@RestController
public class SendCommandRestController {

	@Autowired
	private SendCommandService sendCommandService;

	public ResponseEntity<Integer> executeSendCommand(@RequestBody SendCommandDto command) throws Exception {
		return sendCommandService.sendMessageToRecipients(command);
	}
}