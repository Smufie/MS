import compiledTemplate from '../../../templates/input-templates/interestCheckboxTemplate.hbs';

export default class InterestCheckbox {
    render(data) {
        this.interestCheckboxSpace = document.getElementById('interest-checkbox-space');
        this.interestCheckboxSpace.innerHTML = setHTML(data);
        return this.interestCheckboxSpace.innerHTML;
    }    
}

function setHTML(tableData) {
    return compiledTemplate(tableData);
}