import PageFactory from './PageFactory';

const ADD_PAGE_ID = 1;
const SEND_PAGE_ID = 2;
const DELETE_PAGE_ID = 3;

export default class InputView {
    constructor() {
        this.factory = new PageFactory();
        this.views = this.fillViews();
    }

    fillViews() {
        const views = new Map();
        views.set(ADD_PAGE_ID, (route) => this.factory.displayAddPage(route));
        views.set(SEND_PAGE_ID, (route) => this.factory.displaySendPage(route));
        views.set(DELETE_PAGE_ID, (route) => this.factory.displayDeletePage(route));
        return views;
    }

    routeChanged(route) {
        const displayedPage = this.views.get(route.id);
        if (displayedPage !== undefined) {
            displayedPage(route);
        } else {
            this.factory.displayDefaultPage();
        }
    }
}
