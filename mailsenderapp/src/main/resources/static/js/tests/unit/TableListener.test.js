import TableListener from '../../components/table/TableListener';

describe('table listener tests', () => {
    test('should set name cell properties', () => {
        // given
        const nameCellId = 4;
        const nameCell = document.createElement('tr');
        // when
        const listener = new TableListener();
        const newNameCell = listener.setNameCellProperties(nameCell, nameCellId);
        // then
        expect(newNameCell).not.toBe(undefined);
        expect(newNameCell.class).toBe('name-cell');
        expect(newNameCell.contentEditable).toBe('true');
        expect(newNameCell.getAttribute('data-person-id')).toBe('4');
    });
});
