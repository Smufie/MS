import AddPersonView from '../../components/views/addpersonview/AddPersonView';
import componentData from '../../../templates/template-datas/input-template-datas/add-person-input-data.json';
import FetchObserver from '../../FetchObserver';
import CheckboxInterestDataObserver from '../../CheckboxInterestDataObserver';

jest.mock('../../FetchObserver');

beforeAll(() => {
	// given
	window.interestDataObserver = new CheckboxInterestDataObserver();
	window.fetchObserver = new FetchObserver();
});

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
			componentData.textFields[0].label
		);
		const button = document.getElementById('submit-button');
		expect(button.value).toBe(componentData.buttonValue);
	});

	test('should clear name input', async () => {
		// given
		const view = new AddPersonView();
		view.renderTo(document.body);
		const button = document.getElementById('submit-button');
		const nameInput = document.getElementById('name-input');
		const mailInput = document.getElementById('mail-input');
		nameInput.value = 'John Test';
		mailInput.value = 'johntest@test.com';
		// when
		await button.click();
		// then
		expect(nameInput.value).toBe('');
		expect(mailInput.value).toBe('');
	});

	test('should show information about wrong mail format', async () => {
		// given
		const output = document.createElement('article');
		output.id = 'output';

		const view = new AddPersonView();
		view.renderTo(document.body);

		document.body.appendChild(output);

		const button = document.getElementById('submit-button');
		const mailInput = document.getElementById('mail-input');
		mailInput.value = 'johntest.test.com';
		// when
		await button.click();
		// then
		const error = document.getElementsByClassName('error-returned');

		expect(error.length).toBe(1);
		expect(error[0].innerHTML).toMatch('Give a proper e-mail format');
	});
});
