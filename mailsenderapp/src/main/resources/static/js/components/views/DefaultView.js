/* eslint-disable no-param-reassign */
import InputContainerFactory from '../../containers/InputContainerFactory';

export default class DefaultView {
    constructor() {
        this.container = InputContainerFactory.getDefaultContainer();
    }

    renderTo(article) {
        article.innerHTML = this.container.generatedHTML;
        article.id = this.container.id;
    }
}
