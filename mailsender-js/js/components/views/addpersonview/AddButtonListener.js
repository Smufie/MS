import ExceptionHandler from '../../../ExceptionHandler';
import PersonDTO from '../../../PersonDTO';
import InterestCheckboxesService from '../InterestCheckboxService';

export default class AddButtonListener {
	constructor() {
		this.submitButton = document.getElementById('submit-button');
	}

	listen() {
		this.submitButton.addEventListener('click', (event) => {
			addButtonClicked(event);
		});
	}
}

function addButtonClicked(event) {
	const nameInputField = document.getElementById('name-input');
	const mailInputField = document.getElementById('mail-input');
	const interestsIds = InterestCheckboxesService.extractDataFromChecked(
		'interest-checkbox-space'
	);

	if (validateEmail(mailInputField.value)) {
		const newPersonData = new PersonDTO(
			nameInputField.value,
			mailInputField.value,
			interestsIds
		);
		window.fetchObserver.requestArrived('addperson', newPersonData);
		nameInputField.value = '';
		mailInputField.value = '';
		InterestCheckboxesService.clean('interest-checkbox-space');
		event.target.blur();
	} else {
		ExceptionHandler.error('Error: Give a proper e-mail format.');
	}
}

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
