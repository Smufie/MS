export default class ExceptionHandler {
    static error(error) {
        // TODO ekstrakcja wiadomości z errora
        const errorReturned = document.createElement('P');
        errorReturned.className = 'error-returned';
        errorReturned.innerHTML = `${error}`;
        document.getElementById('output').appendChild(errorReturned);
    }
}
