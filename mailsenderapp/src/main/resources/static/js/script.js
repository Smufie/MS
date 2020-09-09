import * as Handlebars from 'handlebars/runtime';
import '../src/style.scss';
import registerHandlebarsHelpers from './handlebarsHelpers';
//  components
import MenuComponent from './components/MenuComponent';
import TableComponent from './components/TableComponent';
//  containers
import MainSectionContainer from './components/MainSectionContainer';
//  listeners
import RefreshButtonListener from './listeners/RefreshButtonListener';
//  other
import DataObserver from './DataObserver';
import Router from './Router';
import FetchObserver from './FetchObserver';

registerHandlebarsHelpers(Handlebars);
const dataObserver = new DataObserver();
const fetchObserver = new FetchObserver();
window.fetchObserver = fetchObserver; // TODO js event bus
const menuComponent = new MenuComponent();
const mainSectionContainer = new MainSectionContainer();
const tableComponent = new TableComponent('table-space');

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
}

function setupListeners() {
    const router = new Router();
    dataObserver.subscribe(tableComponent);
    const refreshButtonListener = new RefreshButtonListener();
    refreshButtonListener.listen(dataObserver);
    router.route();
}

function initializeTable() {
    window.fetchObserver.requestArrived('getpersons', dataObserver);
}
