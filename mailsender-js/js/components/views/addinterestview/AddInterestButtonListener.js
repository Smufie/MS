import InterestDTO from '../../../InterestDTO';

export default class AddInterestButtonListener {
	constructor() {
		this.addInterestButton = document.getElementById('interest-submit-button');
	}

	listen() {
		this.addInterestButton.addEventListener('click', (event) => {
			addInterestButtonClicked(event);
		});
	}
}

function addInterestButtonClicked(event) {
	const inputField = document.getElementById('interest-input');
	const newInterest = new InterestDTO(inputField.value);
	inputField.value = '';
	event.target.blur();
	window.fetchObserver.requestArrived('addinterest', newInterest);
}
