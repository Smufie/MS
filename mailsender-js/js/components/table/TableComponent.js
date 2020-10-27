/* eslint-disable no-param-reassign */
import compiledTemplate from '../../../templates/tableTemplate.hbs';
import TableListener from './TableListener';

export default class TableComponent {
    constructor() {
        this.tableSpace = null;
        this.listener = null;
    }

    render(data) {
        this.tableSpace = document.getElementById('table-space');
        this.tableSpace.innerHTML = setHTML(data);
        this.listener = new TableListener();
        this.listener.listen();
        return this.tableSpace.innerHTML;
    }
}

function setHTML(tableData) {
    return compiledTemplate(tableData);
}
