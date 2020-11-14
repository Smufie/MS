import AddInterestComponent from '../../components/views/addinterestview/AddInterestComponent';
import inputData from '../../../templates/template-datas/input-template-datas/add-interest-input-data.json';

describe('add input component tests', () => {
	test('should create add input component', () => {
		// when
		const addInterestComponent = new AddInterestComponent();
		// then
		expect(addInterestComponent.generatedHTML).not.toBe(undefined);
	});

	test('should contain proper component', () => {
		// given
		const addInterestComponent = new AddInterestComponent();
		// when
		document.body.innerHTML = addInterestComponent.generatedHTML;
		// then
		const result = document.getElementsByTagName('input');

		expect(result).not.toBe(undefined);

		expect(result[0].type).toBe('text');
		expect(result[0].placeholder).toBe(inputData.textFields[0].placeholderValue);

		expect(result[1].type).toBe('submit');
		expect(result[1].id).toBe(inputData.buttonId);
		expect(result[1].value).toBe(inputData.buttonValue);
	});
});
