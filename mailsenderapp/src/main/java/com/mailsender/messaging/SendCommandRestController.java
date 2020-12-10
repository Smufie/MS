package com.mailsender.messaging;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@ComponentScan(basePackages = { "com.mailsender.person", "com.mailsender.messaging" })
@Configuration
@RestController
public class SendCommandRestController {

	@Autowired
	private SendCommandService sendCommandService;

	@PostMapping("/sendmail")
	public ResponseEntity<Integer> sendMailToRecipients(@RequestBody SendCommandDto command) throws Exception {
		sendCommandService.setSender(new MailSender());
		return sendCommandService.sendMessageToRecipients(command);
	}

	@PostMapping("/sendsms")
	public ResponseEntity<Integer> sendSMSToRecipients(@RequestBody SendCommandDto command) throws Exception {
		sendCommandService.setSender(new SMSSender());
		return sendCommandService.sendMessageToRecipients(command);
	}
}

//TODO INSTANCJONOWANIE SENDEROW, WYBOR STRATEGII