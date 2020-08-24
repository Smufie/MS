const Handlebars = require('handlebars');
import { TableListener } from "../TableListener.js";

export class TableComponent {

    constructor(tableData) {
        this.displayTable(tableData);
    }

    displayTable(tableData) {
        const rawTemplate = document.getElementById('table-template').innerHTML;
        const tableSpace = document.getElementById('table-space');
        let compiledTemplate = Handlebars.compile(rawTemplate);
        const wrapper = { persons: tableData };
        let generatedHTML = compiledTemplate(wrapper);
        tableSpace.innerHTML = generatedHTML;
        this.setupTableListener();
    }

    setupTableListener() {
        new TableListener();
    }
}
