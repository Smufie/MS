import AddInputComponent from './components/addbutton/AddInputComponent';
import DeleteInputComponent from './components/DeleteInputComponent';
import SendInputComponent from './components/SendInputComponent';
import DefaultInputComponent from './components/DefaultInputComponent';

export default class PageFactory {
    constructor() {
        this.pages = new Map();
        this.pages.set('/', new DefaultInputComponent());
    }

    getDefaultPage() {
        return this.pages.get('/');
    }

    getDeletePage(route) {
        if (!route.wasCreated) {
            this.pages.set(route.url, new DeleteInputComponent());
        }
        return this.pages.get(route.url);
    }

    getSendPage(route) {
        if (!route.wasCreated) {
            this.pages.set(route.url, new SendInputComponent());
        }
        return this.pages.get(route.url);
    }

    getAddPage(route) {
        if (!route.wasCreated) {
            this.pages.set(route.url, new AddInputComponent());
        }
        return this.pages.get(route.url);
    }
}
