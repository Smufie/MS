/* eslint-disable no-new */
//  TODO
import TableComponent from './components/TableComponent';
// eslint-disable-next-line import/no-cycle
import TableListener from './TableListener'; //  TODO
import { establishPersonsHttpRequest as establishHttpRequest } from './httpRequestEstablisher';

export default function getPersonList() {
    const xhr = establishHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const persons = JSON.parse(xhr.responseText);
            new TableComponent(persons);
            new TableListener();
        }
    };
    xhr.send();
}
