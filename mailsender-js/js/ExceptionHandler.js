export default class ExceptionHandler {
    static error(error) {
        const errorReturned = document.createElement('P');
        errorReturned.className = 'error-returned';
        errorReturned.innerHTML = `${error}`;
        document.getElementById('output').appendChild(errorReturned);
    }

    static fetchError(fetchResponse) {
        const errorReturned = document.createElement('P');
        fetchResponse.json().then((data) => {
            errorReturned.className = 'error-returned';
            const { status = '', error = '', message = 'Unhandled error.' } = data;
            errorReturned.innerHTML = `${status}: ${error} (${message})`;
        });
            document.getElementById('output').appendChild(errorReturned);
    }
}
