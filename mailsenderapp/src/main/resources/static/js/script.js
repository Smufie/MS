/* eslint-disable no-new */
//  TODO ^
import NameInputComponent from './components/NameInputComponent';
import MenuComponent from './components/MenuComponent';
import MainSectionContainer from './components/MainSectionContainer';
import getPersonList from './allPersonsGetter';
import SubmitButtonListener from './SubmitButtonListener';
import '../css/style.css';

window.addEventListener('DOMContentLoaded', () => {
    setupView();
});

window.addEventListener('load', () => {
    setupListeners();
});

function setupView() {
    new MenuComponent();
    new MainSectionContainer();
    new NameInputComponent();
    getPersonList();
}

function setupListeners() {
    new SubmitButtonListener();
}
