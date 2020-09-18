import containerData from '../../templates/template-datas/input-template-datas/input-containers-data.json';
import compiledTemplate from '../../templates/input-templates/inputContainerTemplate.hbs';
import InputConatainer from './InputContainer';

export default class InputContainerFactory {
    static getAddPersonContainer() {
        const id = containerData.addperson.articleId;
        const generatedHTML = compiledTemplate(containerData.addperson);
        return new InputConatainer(generatedHTML, id);
    }

    static getDeletePersonContainer() {
        const id = containerData.deleteperson.articleId;
        const generatedHTML = compiledTemplate(containerData.deleteperson);
        return new InputConatainer(generatedHTML, id);
    }

    static getSendContainer() {
        const id = containerData.send.articleId;
        const generatedHTML = compiledTemplate(containerData.send);
        return new InputConatainer(generatedHTML, id);
    }

    static getDefaultContainer() {
        const id = containerData.default.articleId;
        const generatedHTML = compiledTemplate(containerData.default);
        return new InputConatainer(generatedHTML, id);
    }
}
