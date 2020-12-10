import InputView from '../../InputView';

beforeEach(() => {
	const testArticle = document.createElement('article');
	testArticle.innerHTML = 'Lorem ipsum';
	const testDiv = document.createElement('div');
	testDiv.id = 'main-section';
	testDiv.appendChild(testArticle);
	document.body.appendChild(testDiv);
});

afterEach(() => {
	document.body.innerHTML = '';
});

describe('input view unit tests', () => {
	test('should initialize views', () => {
		// given
		const view = new InputView();
		// when
		const views = view.initViews();
		// then
		expect(views.get('something random')).toBe(undefined);
		expect(views.get('/adduser')).not.toBe(undefined);
		expect(views.get('/deleteuser')).not.toBe(undefined);
		expect(views.get('/send')).not.toBe(undefined);
		expect(views.get('/addinterest')).not.toBe(undefined);
		expect(views.get('/deleteinterest')).not.toBe(undefined);
	});

	test('should clear page', () => {
		// when
		const view = new InputView();
		view.clearPage();
		// then
		expect(view.inputArticle.innerHTML).toBe('');
	});
});
