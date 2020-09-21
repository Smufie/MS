import compiledTemplate from '../../../templates/tableTemplate.hbs';
import TableListener from './TableListener';

export default class TableComponent {
    constructor() {
        this.tableSpace = null;
        this.listener = null;
    }

    renderTo(targetID) {
        this.tableSpace = document.getElementById(targetID);
        this.tableSpace.innerHTML = setHTML();
        this.listener = new TableListener();
        this.listener.listen();
        return this.tableSpace.innerHTML;
    }
}

function setHTML(tableData) {
    return compiledTemplate(tableData);
}
