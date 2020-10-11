export default class InputContainer {
    constructor(generatedHTML, id) {
        this.generatedHTML = generatedHTML;
        this.id = id;
    }

    getHTML() {
        return this.generatedHTML;
    }

    getId() {
        return this.id;
    }
}
