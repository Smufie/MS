import * as Handlebars from 'handlebars/runtime';
import '../src/style.scss';
import registerHandlebarsHelpers from './handlebarsHelpers';
//  components
import NameInputComponent from './components/NameInputComponent';
import MenuComponent from './components/MenuComponent';
import TableComponent from './components/TableComponent';
//  containers
import MainSectionContainer from './components/MainSectionContainer';
//  listeners
import SubmitButtonListener from './listeners/SubmitButtonListener';
import RefreshButtonListener from './listeners/RefreshButtonListener';
//  classes
import DataObserver from './DataObserver';
import FetchEstablisher from './FetchEstablisher';

registerHandlebarsHelpers(Handlebars);
const menuComponent = new MenuComponent();
const mainSectionContainer = new MainSectionContainer();
const nameInputComponent = new NameInputComponent();
const dataObserver = new DataObserver();
const tableComponent = new TableComponent();
const tableComponent2 = new TableComponent();

window.addEventListener('DOMContentLoaded', () => {
    setupStaticView();
});

window.addEventListener('load', () => {
    setupListeners();
    initializeTable();
});

function setupStaticView() {
    menuComponent.inject();
    mainSectionContainer.inject();
    nameInputComponent.inject();
}

function setupListeners() {
    const submitButtonListener = new SubmitButtonListener();
    submitButtonListener.listen();
    dataObserver.subscribe(tableComponent);
    dataObserver.subscribe(tableComponent2);
    const refreshButtonListener = new RefreshButtonListener();
    refreshButtonListener.listen(dataObserver);
}

function initializeTable() {
    const fetchEstablisher = new FetchEstablisher();
    fetchEstablisher.fetchPersons(dataObserver);
}
