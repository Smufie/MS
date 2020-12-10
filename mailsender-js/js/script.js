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
import PersonDataObserver from './PersonDataObserver';
import Router from './Router';
import FetchObserver from './FetchObserver';

registerHandlebarsHelpers(Handlebars);
const personDataObserver = new PersonDataObserver();
const fetchObserver = new FetchObserver();
window.fetchObserver = fetchObserver;
const menuComponent = new MenuComponent();
const mainSectionContainer = new MainSectionContainer();
const tableComponent = new TableComponent();

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
	personDataObserver.subscribe(tableComponent);
	const refreshButtonListener = new RefreshButtonListener();
	refreshButtonListener.listen(personDataObserver);
	const router = new Router();
	router.route();
}

function initializeTable() {
	window.fetchObserver.requestArrived('getpersons', personDataObserver);
}
