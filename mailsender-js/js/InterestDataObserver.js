export default class InterestDataObserver {
	constructor() {
		this.subscribers = [];
	}

	subscribe(subscriber) {
		this.subscribers.push(subscriber);
	}

	dataArrived(interestsData) {
		interestsData.json().then((data) => {
			window.interests = data;
			const wrapper = { interests: data };
			this.subscribers.forEach((e) => e.render(wrapper));
		});
	}
}
