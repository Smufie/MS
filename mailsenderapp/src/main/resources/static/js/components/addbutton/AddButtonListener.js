import PersonData from '../../PersonData';

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
    const newPersonData = new PersonData(nameInputField.value);
    window.fetchObserver.requestArrived('addperson', newPersonData);
    nameInputField.value = '';
    event.target.blur();
}
