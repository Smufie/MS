import FetchEstablisher from './FetchEstablisher';

export default class FetchObserver {
    constructor() {
        this.establisher = new FetchEstablisher();
        this.fetches = null;
        this.initFetches();
    }

    requestArrived(requestId, requestParam) {
        const request = this.fetches.get(requestId);
        request(requestParam);
    }

    initFetches() {
        this.fetches = new Map();
        this.fetches.set('addperson', (newPerson) => this.establisher.fetchAdd(newPerson));
        this.fetches.set('getpersons', (observer) => this.establisher.fetchPersons(observer));
        this.fetches.set('editperson', (editedPerson) => this.establisher.fetchEdit(editedPerson));
    }
}
