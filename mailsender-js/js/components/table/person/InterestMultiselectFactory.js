import compiledTemplate from '../../../../templates/interestMultiselect.hbs';

export default class InterestMultiselectFactory {
	constructor() {
		const wrapper = { interests: window.interests };
		this.generatedHTML = compiledTemplate(wrapper);
	}

	renderMultiselectTo(selector, personData) {
		document.getElementById(selector).innerHTML = this.generatedHTML;
		document.multiselect(`#${selector}`);

		personData.interestsIds.forEach((interestId) => {
			document.multiselect(`#${selector}`).select(interestId);
		});
	}
}
