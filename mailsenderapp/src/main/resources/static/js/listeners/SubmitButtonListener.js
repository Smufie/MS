import FetchEstablisher from '../FetchEstablisher';
import PersonData from '../PersonData';

export default class SubmitButtonListener {
    constructor() {
        this.submitButton = document.getElementById('submit-button');
    }

    listen() {
        this.submitButton.addEventListener('click', addPerson);
    }
}

function addPerson(event) {
    const nameInputField = document.getElementById('name-input');
    const newPersonData = new PersonData(nameInputField.value);
    const fetchEstablisher = new FetchEstablisher();
    fetchEstablisher.fetchAdd(newPersonData);
    nameInputField.value = '';
    event.target.blur();
}
