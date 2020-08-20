export class nameInputTextFieldComponent {
    constructor() {
        let textFieldInput = document.createElement('input');
        textFieldInput.type = 'text';
        textFieldInput.id = 'name-input';
        textFieldInput.name = 'first-name';
        textFieldInput.placeholder = 'eg. John';
        return textFieldInput;
    }
}