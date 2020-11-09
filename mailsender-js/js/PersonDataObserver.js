export default class PersonDataObserver {
    constructor() {
        this.subscribers = [];
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    dataArrived(personsData) {
        personsData.json().then((data) => {
            const wrapper = { persons: data };
            this.subscribers.forEach((e) => e.render(wrapper));
        });
    }
}
