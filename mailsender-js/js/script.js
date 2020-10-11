import * as Handlebars from 'handlebars/runtime';
import '../src/style.scss';
import registerHandlebarsHelpers from './handlebarsHelpers';
//  components
import MenuComponent from './components/MenuComponent';
import TableComponent from './components/table/TableComponent';
//  containers
import MainSectionContainer from './containers/MainSectionContainer';
//  listeners
import RefreshButtonListener from './components/table/RefreshButtonListener';
//  other
import DataObserver from './DataObserver';
import Router from './Router';
import FetchObserver from './FetchObserver';

// TODO maven i node_modules

registerHandlebarsHelpers(Handlebars);
const dataObserver = new DataObserver();
const fetchObserver = new FetchObserver();
window.fetchObserver = fetchObserver;
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
    dataObserver.subscribe(tableComponent);
    const refreshButtonListener = new RefreshButtonListener();
    refreshButtonListener.listen(dataObserver);
    const router = new Router();
    router.route();
}

function initializeTable() {
    window.fetchObserver.requestArrived('getpersons', dataObserver);
}
