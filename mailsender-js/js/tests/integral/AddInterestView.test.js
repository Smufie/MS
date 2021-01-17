import AddInterestView from '../../components/views/addinterestview/AddInterestView';
import componentData from '../../../templates/template-datas/input-template-datas/add-interest-input-data.json';
import FetchObserver from '../../FetchObserver';

jest.mock('../../FetchObserver');

beforeAll(() => {
	// given
	window.fetchObserver = new FetchObserver();
});

beforeEach(() => {
	FetchObserver.mockClear();
});

describe('add interest view integral tests', () => {
	test('should render add interest view to target', () => {
		// given
		const view = new AddInterestView();
		// when
		view.renderTo(document.body);
		// then
		expect(document.body.id).toBe('add-input-section');

		const contentSpace = document.getElementById('input-content-space');
		expect(contentSpace.getElementsByTagName('label')[0].innerHTML).toBe(
			componentData.textFields[0].label
		);
		const button = document.getElementById('interest-submit-button');
		expect(button.value).toBe(componentData.buttonValue);
	});

	test('should clear name input', async () => {
		// given
		const view = new AddInterestView();
		view.renderTo(document.body);
		const button = document.getElementById('interest-submit-button');
		const interestInput = document.getElementById('interest-input');
		interestInput.value = 'Test';
		// when
		await button.click();
		// then
		expect(interestInput.value).toBe('');
	});
});
