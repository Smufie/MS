export function establishPersonEditHttpRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/person/edit');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    return xhr;
}

export function establishPersonsHttpRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/persons');
    return xhr;
}

export function establishAddHttpRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/person/add');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    return xhr;
}
