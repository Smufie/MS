import SendView from '../../components/views/sendview/SendView';
import componentData from '../../../templates/template-datas/input-template-datas/send-input-data.json';
import containerData from '../../../templates/template-datas/input-template-datas/input-containers-data.json';

describe.skip('send view tests', () => {
    test('should render send view to target', () => {
        // given
        const view = new SendView();
        const target = document.body;
        // when
        view.renderTo(target);
        const contentSpace = target.getElementById('input-content-space');
        // then
        expect(target.innerHTML).not.toBe('');
        expect(target.id).toBe('send-input-section');

        expect(contentSpace.getElementsByTagName('label')[0].innerHTML).toBe(
            containerData.send.label
        );
        expect(contentSpace.getElementsByTagName('option').length).toBe(3);
        expect(contentSpace.getElementById('message-input')).not.toBe(undefined);
        expect(contentSpace.getElementById(componentData.buttonId).value).toBe(
            componentData.buttonValue
        );
    });
});
