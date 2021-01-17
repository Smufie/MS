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
	fetches.set('addperson', (newPerson) => establisher.fetchAddPerson(newPerson));
	fetches.set('addinterest', (newInterest) => establisher.fetchAddInterest(newInterest));
	fetches.set('deleteperson', (personId) => establisher.fetchDeletePerson(personId));
	fetches.set('deleteinterest', (interestId) => establisher.fetchDeleteInterest(interestId));
	fetches.set('getpersons', (observer) => establisher.fetchPersons(observer));
	fetches.set('editperson', (editedPerson) => establisher.fetchEdit(editedPerson));
	fetches.set('getinterests', (observer) => establisher.fetchInterests(observer));
	fetches.set('sendmessage', (message) => establisher.fetchSend(message));
	return fetches;
}
