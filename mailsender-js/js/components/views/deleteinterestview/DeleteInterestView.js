/* eslint-disable no-param-reassign */
import InputContainerFactory from '../../../containers/InputContainerFactory';
import DeleteInterestComponent from './DeleteInterestComponent';

export default class DeleteInterestView {
    constructor() {
        this.container = InputContainerFactory.getDeleteInterestContainer();
        this.input = new DeleteInterestComponent();
    }
    
    renderTo(target) {
        target.innerHTML = this.container.generatedHTML;
        target.id = this.container.id;
        attachInputToContainer(this.input);
        return target.innerHTML;
    }
}

function attachInputToContainer(input) {
const contentSpace = document.getElementById('input-content-space');
contentSpace.innerHTML += input.generatedHTML;
return contentSpace.innerHTML;
}