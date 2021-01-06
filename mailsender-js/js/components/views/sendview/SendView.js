/* eslint-disable no-param-reassign */
import InputContainerFactory from '../../../containers/InputContainerFactory';
import InterestCheckbox from '../InterestCheckbox';
import SendButtonListener from './SendButtonListener';
import SendInputComponent from './SendInputComponent';

export default class SendView {
	constructor() {
		this.container = InputContainerFactory.getSendContainer();
		this.input = new SendInputComponent();
		this.checkbox = new InterestCheckbox();
		window.interestDataObserver.subscribe(this.checkbox);
	}

	renderTo(target) {
		target.innerHTML = this.container.generatedHTML;
		target.id = this.container.id;
		attachInputToContainer(this.input);
		listenSendButton();
		renderCheckboxToContainer();
		return target.innerHTML;
	}
}
function listenSendButton() {
	const sendButtonListener = new SendButtonListener();
	sendButtonListener.listen();
}

function attachInputToContainer(input) {
	const contentSpace = document.getElementById('input-content-space');
	contentSpace.innerHTML += input.generatedHTML;
	return contentSpace.innerHTML;
}

function renderCheckboxToContainer() {
	window.fetchObserver.requestArrived('getinterests', window.interestDataObserver);
}
