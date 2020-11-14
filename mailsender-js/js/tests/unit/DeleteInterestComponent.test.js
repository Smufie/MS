import DeleteInterestComponent from '../../components/views/deleteinterestview/DeleteInterestComponent';
import inputData from '../../../templates/template-datas/input-template-datas/delete-interest-input-data.json';

describe('add input component tests', () => {
	test('should create add input component', () => {
		// when
		const deleteInterestComponent = new DeleteInterestComponent();
		// then
		expect(deleteInterestComponent.generatedHTML).not.toBe(undefined);
	});

	test('should contain proper component', () => {
		// given
		const deleteInterestComponent = new DeleteInterestComponent();
		// when
		document.body.innerHTML = deleteInterestComponent.generatedHTML;
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
