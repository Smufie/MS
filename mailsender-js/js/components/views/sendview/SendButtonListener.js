import MessageDTO from './MessageDTO';
import InterestCheckboxesService from '../InterestCheckboxService';

export default class SendButtonListener {
	constructor() {
		this.sendButton = document.getElementById('send-button');
		this.messageInput = document.getElementById('message-input');
	}

	listen() {
		this.sendButton.addEventListener('click', (event) => {
			this.sendMessage();
			this.clean(event);
		});
	}

	sendMessage() {
		const messageContent = this.messageInput.value;
		const interestIds = InterestCheckboxesService.extractDataFromChecked(
			'interest-checkbox-space'
		);
		const message = new MessageDTO(interestIds, messageContent);
		window.fetchObserver.requestArrived('sendmessage', message);
	}

	clean(event) {
		this.messageInput.value = '';
		event.target.blur();
		InterestCheckboxesService.clean('interest-checkbox-space');
	}
}
