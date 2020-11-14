/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */

export default class InterestCheckboxDataExtractor {
	static extractDataFromChecked(checkboxSpaceId) {
		const checkboxSpace = document.getElementById(checkboxSpaceId);
		const checkboxes = checkboxSpace.getElementsByClassName('interest-checkbox');
		const interestsIds = [];
		Array.prototype.forEach.call(checkboxes, (checkbox) => {
			if (checkbox.checked) {
				interestsIds.push(checkbox.getAttribute('dataInterestId'));
				checkbox.checked = false; // TODO ?
			}
		});
		return interestsIds;
	}

	static extractDataFromNames(checkboxSpaceId, interestsNamesArray) {
		const checkboxSpace = document.getElementById(checkboxSpaceId);
		const checkboxes = checkboxSpace.getElementsByClassName('interest-checkbox');
		const interestsIds = [];
		Array.prototype.forEach.call(checkboxes, (checkbox) => {
			interestsNamesArray.forEach((name) => {
				if (checkbox.name === name) {
					interestsIds.push(checkbox.getAttribute('dataInterestId'));
				}
			});
		});
		return interestsIds;
	}
}
