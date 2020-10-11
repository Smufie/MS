export default class ExceptionHandler {
    static error(error) {
        const errorReturned = document.createElement('P');
        errorReturned.className = 'error-returned';
        errorReturned.innerHTML = `${error}`;
        document.getElementById('output').appendChild(errorReturned);
    }
}
