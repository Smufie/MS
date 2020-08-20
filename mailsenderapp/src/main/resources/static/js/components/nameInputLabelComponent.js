export class nameInputLabelComponent{
    constructor() {
        let nameInputLabel = document.createElement('label');
        nameInputLabel.innerHTML = 'Type your name:';
        return nameInputLabel;
    }
}