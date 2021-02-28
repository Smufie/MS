package com.mailsender.queue;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;
import org.springframework.util.concurrent.ListenableFuture;

import com.mailsender.messaging.MessageDto;
import com.mailsender.messaging.RecipientDto;

@Service
class SendCommandService {

	@Autowired
	KafkaTemplate<String, MessageDto> template;

	private static final String TOPIC = "MessageQueue";

	public Integer queueRecipients(SendCommandDto command) throws Exception {

		List<RecipientDto> recipients = command.getRecipients();

		int foundPersonsAmount = recipients.size();
		while (!recipients.isEmpty()) {
			RecipientDto recipient = recipients.remove(0);
			ListenableFuture<SendResult<String, MessageDto>> send = template.send(TOPIC,
					new MessageDto(command.getMessage(), recipient, command.getSenderType()));
			// TODO kafka callbacki
			// TODO interfejs miedzy brokerem a serwisem
			// TODO dwie aplikacje producent i konsument
			// TODO testy
			// TODO message id
		}
		return foundPersonsAmount;
	}
}
