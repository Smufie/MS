import InterestCheckbox from '../../components/views/InterestCheckbox';

const data = {
	interests: [
		{
			interest_id: 0,
			interest: 'test',
		},
	],
};

describe('interest checkbox tests', () => {
	test('should render checkbox', () => {
		// given
		const interestCheckboxSpace = document.createElement('div');
		interestCheckboxSpace.id = 'interest-checkbox-space';
		document.body.appendChild(interestCheckboxSpace);
		const checkbox = new InterestCheckbox();
		// when
		checkbox.render(data);
		// then
		const box = document.getElementById('checkbox-0');

		expect(box).not.toBe(undefined);
		expect(box.name).toBe('test');
	});
});
