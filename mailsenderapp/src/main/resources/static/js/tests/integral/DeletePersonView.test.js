import DeletePersonView from '../../components/views/deletepersonview/DeletePersonView';
import componentData from '../../../templates/template-datas/input-template-datas/delete-person-input-data.json';
import containerData from '../../../templates/template-datas/input-template-datas/input-containers-data.json';

describe.skip('delete view tests', () => {
    test('should render delete person view to target', () => {
        // given
        const view = new DeletePersonView();
        // when
        view.renderTo(document.body);
        const contentSpace = document.getElementById('input-content-space');
        // then
        expect(document.body.innerHTML).not.toBe('');
        expect(document.body.id).toBe('delete-input-section');

        expect(contentSpace.getElementsByTagName('label')[0].innerHTML).toBe(
            containerData.deleteperson.label
        );
        expect(contentSpace.getElementById(componentData.buttonId)).not.toBe(undefined);
    });
});
