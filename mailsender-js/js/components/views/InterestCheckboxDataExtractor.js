/* eslint-disable class-methods-use-this */

// TODO foreach

export default class InterestCheckboxDataExtractor {
    static extractDataFromChecked(checkboxSpaceId) {
        const checkboxSpace = document.getElementById(checkboxSpaceId);
        const checkboxes = checkboxSpace.getElementsByClassName('interest-checkbox');
        const interestsIds = [];
        for (let i = 0; i < checkboxes.length; i += 1) {
            if(checkboxes[i].checked) {
                interestsIds.push(checkboxes[i].getAttribute('datainterestid'));
                checkboxes[i].checked = false;
            }
        }
        return interestsIds;
    }

    static extractDataFromNames(checkboxSpaceId, interestsNamesArray) {
        const checkboxSpace = document.getElementById(checkboxSpaceId);
        const checkboxes = checkboxSpace.getElementsByClassName('interest-checkbox');
        const interestsIds = [];
        for (let i = 0; i < checkboxes.length; i += 1) {
            for (let y = 0; y < interestsNamesArray.length; y += 1) {
                if(checkboxes[i].name === interestsNamesArray[y]) {
                    interestsIds.push(checkboxes[i].getAttribute('datainterestid'));
                    checkboxes[i].checked = false;
                }
            }
        }
        return interestsIds;
    }
}