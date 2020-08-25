import compiledTemplate from '../../templates/tableTemplate.hbs';

export default class TableComponent {
    constructor(tableData) {
        displayTable(tableData);
    }
}

function displayTable(tableData) {
    const tableSpace = document.getElementById('table-space');
    const wrapper = { persons: tableData };
    const generatedHTML = compiledTemplate(wrapper);
    tableSpace.innerHTML = generatedHTML;
}
