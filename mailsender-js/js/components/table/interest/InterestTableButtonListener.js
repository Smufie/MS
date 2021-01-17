export default class InterestTableButtonListener {
	constructor() {
		this.refreshButton = document.getElementById('interests-button');
	}

	listen(dataObserver) {
		this.refreshButton.addEventListener('click', (event) => {
			window.fetchObserver.requestArrived('getinterests', dataObserver);
			event.target.blur();
		});
	}
}
