import AddPersonView from './addpersonview/AddPersonView';
import AddInterestView from './addinterestview/AddInterestView';
import DeletePersonView from './deletepersonview/DeletePersonView';
import DeleteInterestView from './deleteinterestview/DeleteInterestView';
import SendView from './sendview/SendView';
import DefaultView from './DefaultView';

export default class ViewFactory {
    static getDefaultView() {
        return new DefaultView();
    }

    static getDeletePersonView() {
        return new DeletePersonView();
    }

    static getDeleteInterestView() {
        return new DeleteInterestView();
    }

    static getSendView() {
        return new SendView();
    }

    static getAddPersonView() {
        return new AddPersonView();
    }

    static getAddInterestView() {
        return new AddInterestView();
    }
}
