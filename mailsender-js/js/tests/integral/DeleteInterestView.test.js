import DeleteInterestView from '../../components/views/deleteinterestview/DeleteInterestView';
import componentData from '../../../templates/template-datas/input-template-datas/delete-interest-input-data.json';
import FetchObserver from '../../FetchObserver';

jest.mock('../../FetchObserver');

beforeAll(() => {
	// given
	window.fetchObserver = new FetchObserver();
});

beforeEach(() => {
	FetchObserver.mockClear();
});

describe('delete interest view integral tests', () => {
	test('should render delete interest view to target', () => {
		// given
		const view = new DeleteInterestView();
		// when
		view.renderTo(document.body);
		// then
		expect(document.body.id).toBe('delete-input-section');

		const contentSpace = document.getElementById('input-content-space');
		expect(contentSpace.getElementsByTagName('label')[0].innerHTML).toBe(
			componentData.textFields[0].label
		);
		const button = document.getElementById('interest-delete-button');
		expect(button.value).toBe(componentData.buttonValue);
	});

	test('should clear id input', async () => {
		// given
		const view = new DeleteInterestView();
		view.renderTo(document.body);
		const button = document.getElementById('interest-delete-button');
		const idInput = document.getElementById('interest-id-input');
		idInput.value = '0';
		// when
		await button.click();
		// then
		expect(idInput.value).toBe('');
	});

	test('should inform about wrong id', async () => {
		// given
		const output = document.createElement('div');
		output.id = 'output';

		const view = new DeleteInterestView();
		view.renderTo(document.body);

		document.body.appendChild(output);

		const button = document.getElementById('interest-delete-button');
		const idInput = document.getElementById('interest-id-input');
		idInput.value = 'aoiwjd';
		// when
		await button.click();
		// then
		const errorMessage = document.getElementsByClassName('error-returned')[0];
		expect(idInput.value).not.toBe('');
		expect(errorMessage.innerHTML).toBe('ERROR: Typed ID has to be a number.');
	});
});
