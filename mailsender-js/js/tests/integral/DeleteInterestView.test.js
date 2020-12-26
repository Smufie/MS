import DeleteInterestView from '../../components/views/deleteinterestview/DeleteInterestView';
import componentData from '../../../templates/template-datas/input-template-datas/delete-interest-input-data.json';
import FetchObserver from '../../FetchObserver';

jest.mock('../../FetchObserver');

beforeEach(() => {
	FetchObserver.mockClear();
});

describe('delete interest view integral tests', () => {
	test('should render delete interest view to target', () => {
		// given
		window.fetchObserver = new FetchObserver();
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
});
