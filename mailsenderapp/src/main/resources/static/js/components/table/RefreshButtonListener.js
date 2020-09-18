export default class SubmitButtonListener {
    constructor() {
        this.submitButton = document.getElementById('refresh-button');
    }

    listen(dataObserver) {
        this.submitButton.addEventListener('click', (event) => {
            window.fetchObserver.requestArrived('getpersons', dataObserver);
            event.target.blur();
        });
    }
}
