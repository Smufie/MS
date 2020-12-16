/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */

export default class InterestCheckboxesService {
	static extractDataFromChecked(checkboxSpaceId) {
		const checkboxSpace = document.getElementById(checkboxSpaceId);
		const checkboxes = checkboxSpace.getElementsByClassName('interest-checkbox');
		const interestsIds = [];
		Array.prototype.forEach.call(checkboxes, (checkbox) => {
			if (checkbox.checked) {
				interestsIds.push(parseInt(checkbox.getAttribute('dataInterestId'), 10));
			}
		});
		return interestsIds;
	}

	static clean(checkboxSpaceId) {
		const checkboxSpace = document.getElementById(checkboxSpaceId);
		const checkboxes = checkboxSpace.getElementsByClassName('interest-checkbox');
		Array.prototype.forEach.call(checkboxes, (checkbox) => {
			if (checkbox.checked) {
				checkbox.checked = false; // TODO ?
			}
		});
	}
}
