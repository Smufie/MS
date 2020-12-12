/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */

export default class InterestCheckboxDataExtractor {
	static extractDataFromChecked(checkboxSpaceId) {
		const checkboxSpace = document.getElementById(checkboxSpaceId);
		const checkboxes = checkboxSpace.getElementsByClassName('interest-checkbox');
		const interestsIds = [];
		Array.prototype.forEach.call(checkboxes, (checkbox) => {
			if (checkbox.checked) {
				interestsIds.push(parseInt(checkbox.getAttribute('dataInterestId'), 10));
				checkbox.checked = false; // TODO ?
			}
		});
		return interestsIds;
	}

	static extractDataFromNames(interestsNamesArray) {
		const interestsIds = [];
		window.interests.forEach((interest) => {
			interestsNamesArray.forEach((name) => {
				if (interest.interest === name) {
					interestsIds.push(interest.interestId);
				}
			});
		});
		return interestsIds;
	}
}
