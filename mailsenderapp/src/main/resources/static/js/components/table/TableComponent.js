import compiledTemplate from '../../../templates/tableTemplate.hbs';
import TableListener from './TableListener';

export default class TableComponent {
    constructor() {
        this.tableSpace = null;
        this.listener = null;
    }

    renderTo(targetID) {
        this.tableSpace = document.getElementById(targetID);
        this.tableSpace.innerHTML = getHTML();
        this.listener = listen();
        return this.tableSpace.innerHTML;
    }
}

function getHTML(tableData) {
    return compiledTemplate(tableData);
}

function listen() {
    return new TableListener();
}
