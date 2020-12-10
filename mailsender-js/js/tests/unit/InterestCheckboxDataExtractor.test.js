import InterestCheckbox from '../../components/views/InterestCheckbox';
import InterestCheckboxDataExtractor from '../../components/views/InterestCheckboxDataExtractor';

const data = {
	interests: [
		{
			interestId: 0,
			interest: 'test',
		},
	],
};

describe('intererst checkbox data extractor tests', () => {
	test('should extract data from checked', () => {
		// given
		const interestCheckboxSpace = document.createElement('div');
		interestCheckboxSpace.id = 'interest-checkbox-space';
		document.body.appendChild(interestCheckboxSpace);
		const checkbox = new InterestCheckbox();
		checkbox.render(data);
		const box = document.getElementById('checkbox-0');
		box.checked = true;
		// when
		const interestIds = InterestCheckboxDataExtractor.extractDataFromChecked(
			'interest-checkbox-space'
		);
		// then
		expect(box.checked).toBe(false);
		expect(interestIds).toEqual([0]);
	});

	test('should extract data from names', () => {
		// given
		const interestCheckboxSpace = document.createElement('div');
		interestCheckboxSpace.id = 'interest-checkbox-space';
		document.body.appendChild(interestCheckboxSpace);
		const checkbox = new InterestCheckbox();
		checkbox.render(data);
		// when
		const interestIds = InterestCheckboxDataExtractor.extractDataFromNames(
			'interest-checkbox-space',
			['test', 'idontexist']
		);
		// then
		expect(interestIds).toEqual([0]);
	});
});
