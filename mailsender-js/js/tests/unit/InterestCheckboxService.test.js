import InterestCheckbox from '../../components/views/InterestCheckbox';
import InterestCheckboxService from '../../components/views/InterestCheckboxService';

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
		const interestIds = InterestCheckboxService.extractDataFromChecked(
			'interest-checkbox-space'
		);
		// then
		expect(interestIds).toEqual([0]);
	});

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
		InterestCheckboxService.clean('interest-checkbox-space');
		// then
		expect(box.checked).toBe(false);
	});
});
