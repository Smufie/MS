import FetchEstablisher from './FetchEstablisher';

export default class FetchObserver {
    constructor() {
        this.establisher = new FetchEstablisher();
        this.fetches = initFetches(this.establisher);
    }

    requestArrived(requestId, requestParam) {
        const request = this.fetches.get(requestId);
        request(requestParam);
    }
}

function initFetches(establisher) {
    const fetches = new Map();
    fetches.set('addperson', (newPerson) => establisher.fetchAdd(newPerson));
    fetches.set('deleteperson', (personId) => establisher.fetchDelete(personId));
    fetches.set('getpersons', (observer) => establisher.fetchPersons(observer));
    fetches.set('editperson', (editedPerson) => establisher.fetchEdit(editedPerson));
    return fetches;
}
