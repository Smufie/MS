package com.mailsender.messaging;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class MessagingController {

	@Autowired
	private MessagingService messagingService;

	@KafkaListener(topics = "MessageQueue", groupId = "messaging_group")
	public void executeSendCommand(@RequestBody MessageDto message) throws Exception {
		messagingService.send(message);
	}
}