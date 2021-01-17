import SendView from '../../components/views/sendview/SendView';
import componentData from '../../../templates/template-datas/input-template-datas/send-input-data.json';
import containerData from '../../../templates/template-datas/input-template-datas/input-containers-data.json';
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

describe('send view tests', () => {
	test('should render send view to target', () => {
		// given
		const view = new SendView();
		// when
		view.renderTo(document.body);
		// then
		expect(document.body.innerHTML).not.toBe('');
		expect(document.body.id).toBe(containerData.send.articleId);

		const contentSpace = document.getElementById('input-content-space');
		expect(contentSpace.getElementsByTagName('textarea').length).toBe(1);
		expect(contentSpace.getElementsByTagName('input')[0].value).toBe(componentData.buttonValue);
	});

	test('should clear message input', () => {
		// given
		const view = new SendView();
		view.renderTo(document.body);
		const messageInput = document.getElementById('message-input');
		messageInput.value = 'test';
		const sendButton = document.getElementById('send-button');
		// when
		sendButton.click();
		// then
		expect(messageInput.value).toBe('');
	});
});
