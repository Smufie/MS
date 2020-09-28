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
        table.render();
        // then
        expect(document.getElementById(TARGET_ID).innerHTML).toMatch(`<table id="person-table">`);
    });
});
