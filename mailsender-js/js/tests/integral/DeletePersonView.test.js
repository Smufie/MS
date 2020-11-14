import DeletePersonView from '../../components/views/deletepersonview/DeletePersonView';
import componentData from '../../../templates/template-datas/input-template-datas/delete-person-input-data.json';
import FetchObserver from '../../FetchObserver';

jest.mock('../../FetchObserver');

beforeEach(() => {
	FetchObserver.mockClear();
});

describe('delete view tests', () => {
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
			componentData.textFields[0].label
		);
		const button = contentSpace.getElementsByTagName('input')[1];
		expect(button).not.toBe(undefined);
		expect(button.value).toBe(componentData.buttonValue);
	});

	test('should clear id input', async () => {
		// given
		window.fetchObserver = new FetchObserver();

		const view = new DeletePersonView();
		view.renderTo(document.body);
		const button = document.getElementById('delete-button');
		const idInput = document.getElementById('id-input');
		idInput.value = '0';
		// when
		await button.click();
		// then
		expect(idInput.value).toBe('');
	});
});
