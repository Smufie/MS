import * as Handlebars from 'handlebars/runtime';
import '../src/style.scss';
import registerHandlebarsHelpers from './handlebarsHelpers';
//  components
import MenuComponent from './components/MenuComponent';
import TableRenderer from './components/table/TableRenderer';
//  containers
import MainSectionContainer from './containers/MainSectionContainer';
//  listeners
import RefreshButtonListener from './components/table/RefreshButtonListener';
//  other
import PersonDataObserver from './PersonDataObserver';
import Router from './Router';
import FetchObserver from './FetchObserver';
import InterestDataObserver from './InterestDataObserver';

registerHandlebarsHelpers(Handlebars);
const personDataObserver = new PersonDataObserver();
window.interestDataObserver = new InterestDataObserver();
const fetchObserver = new FetchObserver();
window.fetchObserver = fetchObserver;
const menuComponent = new MenuComponent();
const mainSectionContainer = new MainSectionContainer();
const tableRenderer = new TableRenderer();

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
	personDataObserver.subscribe(tableRenderer);
	const refreshButtonListener = new RefreshButtonListener();
	refreshButtonListener.listen(personDataObserver);
	const router = new Router();
	router.route();
}

function initializeTable() {
	window.fetchObserver.requestArrived('getinterests', window.interestDataObserver);
	window.fetchObserver.requestArrived('getpersons', personDataObserver);
}
