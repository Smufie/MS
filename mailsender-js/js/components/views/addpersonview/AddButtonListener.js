import ExceptionHandler from '../../../ExceptionHandler';
import PersonData from '../../../PersonData';

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
    const interestInputField = document.getElementById('interest-input');
    const interests = Array.from(interestInputField.value.split(' '));
    
    if(validateEmail(mailInputField.value)) {
        const newPersonData = new PersonData(nameInputField.value, mailInputField.value, interests);
        window.fetchObserver.requestArrived('addperson', newPersonData);
    } else {
        ExceptionHandler.error('Error: Give a proper e-mail format.')
    }
    nameInputField.value = '';
    mailInputField.value = '';
    interestInputField.value = '';
    event.target.blur();
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}