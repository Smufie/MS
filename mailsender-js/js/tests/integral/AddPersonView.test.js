import AddPersonView from '../../components/views/addpersonview/AddPersonView';
import componentData from '../../../templates/template-datas/input-template-datas/add-person-input-data.json';
import containerData from '../../../templates/template-datas/input-template-datas/input-containers-data.json';
import FetchObserver from '../../FetchObserver';

jest.mock('../../FetchObserver');

beforeEach(() => {
    FetchObserver.mockClear();
});

describe('add view integral tests', () => {
    test('should render add person view to target', () => {
        // given
        const view = new AddPersonView();
        // when
        view.renderTo(document.body);
        // then
        expect(document.body.id).toBe('add-input-section');

        const contentSpace = document.getElementById('input-content-space');
        expect(contentSpace.getElementsByTagName('label')[0].innerHTML).toBe(
            containerData.addperson.label
        );
        const button = contentSpace.getElementsByTagName('input')[1];
        expect(button.value).toBe(componentData.buttonValue);
    });

    test('should clear name input', async () => {
        // given
        window.fetchObserver = new FetchObserver();

        const view = new AddPersonView();
        view.renderTo(document.body);
        const button = document.getElementById('submit-button');
        const nameInput = document.getElementById('name-input');
        nameInput.value = 'John';
        // when
        await button.click();
        // then
        expect(nameInput.value).toBe('');
    });
});
