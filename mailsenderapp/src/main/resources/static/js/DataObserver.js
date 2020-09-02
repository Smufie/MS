export default class DataObserver {
    constructor() {
        this.listeners = [];
    }

    subscribe(subscriber) {
        this.listeners.push(subscriber);
    }

    dataArrived(personsData) {
        personsData.then((data) => {
            const wrapper = { persons: data };
            this.listeners.forEach((e) => e.update(wrapper));
        });
    }
}
