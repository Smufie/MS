import AddPersonView from './addpersonview/AddPersonView';
import DeletePersonView from './deletepersonview/DeletePersonView';
import SendView from './sendview/SendView';
import DefaultView from './DefaultView';

export default class ViewFactory {
    constructor() {
        this.pages = new Map();
        this.pages.set('/', new DefaultView());
    }

    getDefaultView() {
        return this.pages.get('/');
    }

    getDeletePersonView(route) {
        if (!route.wasCreated) {
            this.pages.set(route.url, new DeletePersonView());
        }
        return this.pages.get(route.url);
    }

    getSendView(route) {
        if (!route.wasCreated) {
            this.pages.set(route.url, new SendView());
        }
        return this.pages.get(route.url);
    }

    getAddPersonView(route) {
        if (!route.wasCreated) {
            this.pages.set(route.url, new AddPersonView());
        }
        return this.pages.get(route.url);
    }
}
