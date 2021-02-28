package com.mailsender.queue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class SendCommandRestController {

	@Autowired
	private SendCommandService sendCommandService;

	public ResponseEntity<Integer> executeSendCommand(@RequestBody SendCommandDto command) throws Exception {
		return ResponseEntity.ok(sendCommandService.queueRecipients(command));
	}
}