import AddPersonView from './addpersonview/AddPersonView';
import DeletePersonView from './deletepersonview/DeletePersonView';
import SendView from './sendview/SendView';
import DefaultView from './DefaultView';

export default class ViewFactory {
    static getDefaultView() {
        return new DefaultView();
    }

    static getDeletePersonView() {
        return new DeletePersonView();
    }

    static getSendView() {
        return new SendView();
    }

    static getAddPersonView() {
        return new AddPersonView();
    }
}
