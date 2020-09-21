import TableComponent from '../../components/table/TableComponent';

const TARGET_ID = 'table-space';

describe('Table component tests', () => {
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
});
