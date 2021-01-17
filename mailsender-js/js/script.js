import * as Handlebars from 'handlebars/runtime';
import '../src/style.scss';
import registerHandlebarsHelpers from './handlebarsHelpers';
//  components
import MenuComponent from './components/MenuComponent';
import PersonTableRenderer from './components/table/person/PersonTableRenderer';
import InterestTableRenderer from './components/table/interest/InterestTableRenderer';
//  containers
import MainSectionContainer from './containers/MainSectionContainer';
//  listeners
import PersonTableButtonListener from './components/table/person/PersonTableButtonListener';
import InterestTableButtonListener from './components/table/interest/InterestTableButtonListener';
//  other
import PersonDataObserver from './PersonDataObserver';
import Router from './Router';
import FetchObserver from './FetchObserver';
import CheckboxInterestDataObserver from './CheckboxInterestDataObserver';
import TableInterestDataObserver from './TableInterestDataObserver';

registerHandlebarsHelpers(Handlebars);
const personDataObserver = new PersonDataObserver();
const tableInterestDataObserver = new TableInterestDataObserver();
window.interestDataObserver = new CheckboxInterestDataObserver();
window.fetchObserver = new FetchObserver();
const menuComponent = new MenuComponent();
const mainSectionContainer = new MainSectionContainer();
const personTableRenderer = new PersonTableRenderer();
const interestTableRenderer = new InterestTableRenderer();

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
	personDataObserver.subscribe(personTableRenderer);
	tableInterestDataObserver.subscribe(interestTableRenderer);

	const personTableButtonListener = new PersonTableButtonListener();
	personTableButtonListener.listen(personDataObserver);

	const interestTableButtonListener = new InterestTableButtonListener();
	interestTableButtonListener.listen(tableInterestDataObserver);

	const router = new Router();
	router.route();
}

function initializeTable() {
	window.fetchObserver.requestArrived('getinterests', window.interestDataObserver);
	window.fetchObserver.requestArrived('getpersons', personDataObserver);
}
