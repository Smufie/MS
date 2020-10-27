import SendView from '../../components/views/sendview/SendView';
import componentData from '../../../templates/template-datas/input-template-datas/send-input-data.json';
import containerData from '../../../templates/template-datas/input-template-datas/input-containers-data.json';

describe('send view tests', () => {
    test('should render send view to target', () => {
        // given
        const view = new SendView();
        // when
        view.renderTo(document.body);
        // then
        expect(document.body.innerHTML).not.toBe('');
        expect(document.body.id).toBe('send-input-section');

        const contentSpace = document.getElementById('input-content-space');
        expect(document.body.getElementsByTagName('p')[0].innerHTML).toBe(
            containerData.send.label
        );
        expect(contentSpace.getElementsByTagName('option').length).toBe(3);
        expect(contentSpace.getElementsByTagName('input')[0].value).toBe(componentData.buttonValue);
    });
});
