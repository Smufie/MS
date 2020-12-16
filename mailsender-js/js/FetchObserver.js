import FetchEstablisher from './FetchEstablisher';

export default class FetchObserver {
	constructor() {
		this.establisher = new FetchEstablisher();
		this.fetches = initFetches(this.establisher);
	}

	requestArrived(requestId, requestParam) {
		const request = this.getRequest(requestId);
		request(requestParam);
	}

	getRequest(requestId) {
		return this.fetches.get(requestId);
	}
}

function initFetches(establisher) {
	const fetches = new Map();
	fetches.set('addperson', (newPerson) => establisher.fetchAdd(newPerson));
	fetches.set('deleteperson', (personId) => establisher.fetchDelete(personId));
	fetches.set('getpersons', (observer) => establisher.fetchPersons(observer));
	fetches.set('editperson', (editedPerson) => establisher.fetchEdit(editedPerson));
	fetches.set('getinterests', (observer) => establisher.fetchInterests(observer));
	fetches.set('sendmessage', (message) => establisher.fetchSend(message));
	return fetches;
}
