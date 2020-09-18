import TableComponent from '../components/TableComponent';

const TARGET_ID = 'table-space';

describe('Table component tests', () => {
    test('should create table', () => {
        // given
        // when
        const table = new TableComponent();
        // then
        expect(table.tableSpace).toBe(null);
    });

    test('should render table', () => {
        // given
        const divElement = document.createElement('div');
        divElement.id = TARGET_ID;
        document.body.appendChild(divElement);
        // when
        const table = new TableComponent();
        table.renderTo(TARGET_ID);
        // then
        expect(document.getElementById(TARGET_ID)).not.toBe(undefined);
        expect(document.getElementById(TARGET_ID).innerHTML).toMatch(`<table id="person-table">`);
    });

    test('should set name cell properties', () => {
        // given
        const nameCellId = 4;
        const nameCell = document.createElement('tr');
        // when
        const table = new TableComponent();
        const newNameCell = table.setNameCellProperties(nameCell, nameCellId);
        // then
        expect(newNameCell).not.toBe(undefined);
        expect(newNameCell.class).toBe('name-cell');
        expect(newNameCell.contentEditable).toBe('true');
        expect(newNameCell.getAttribute('data-person-id')).toBe('4');
    });
});
