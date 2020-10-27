import TableListener from '../../components/table/TableListener';

describe('table listener tests', () => {
    test('should set name cell properties', () => {
        // given
        const nameCellId = 4;
        const nameCell = document.createElement('tr');
        const type = 'test';
        // when
        const listener = new TableListener();
        const newNameCell = listener.setCellProperties(nameCell, nameCellId, type);
        // then
        expect(newNameCell).not.toBe(undefined);
        expect(newNameCell.contentEditable).toBe('true');
        expect(newNameCell.getAttribute('data-person-id')).toBe('4');
        expect(newNameCell.id).toBe(`${type}-${nameCellId}`);
    });
});
