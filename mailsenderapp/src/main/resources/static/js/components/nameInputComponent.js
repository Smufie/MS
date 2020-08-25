export default class NameInputComponent {
    constructor() {
        const nameInputComp = document.createElement('div');
        nameInputComp.appendChild(createNameInputLabel());
        nameInputComp.appendChild(createNameInputTextField());
        nameInputComp.appendChild(createNameInputSubmitButton());
        const inputContainer = document.getElementById('input');
        inputContainer.appendChild(nameInputComp);
    }
}

function createNameInputLabel() {
    const nameInputLabel = document.createElement('label');
    nameInputLabel.innerHTML = 'Type your name:';
    return nameInputLabel;
}

function createNameInputTextField() {
    const textFieldInput = document.createElement('input');
    textFieldInput.type = 'text';
    textFieldInput.id = 'name-input';
    textFieldInput.name = 'first-name';
    textFieldInput.placeholder = 'eg. John';
    return textFieldInput;
}

function createNameInputSubmitButton() {
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.id = 'submit-button';
    submitButton.value = 'Submit';
    return submitButton;
}
