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
    event.target.blur();
    const newPersonData = new PersonData(nameInputField.value);
    nameInputField.value = '';
    window.fetchObserver.requestArrived('addperson', newPersonData);
}