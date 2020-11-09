import ViewFactory from './components/views/ViewFactory';

// TODO Already made views control

const INPUT_ARTICLE_INDEX = 0;

const ADD_PERSON_PAGE_ID = '/adduser';
const ADD_INTEREST_PAGE_ID = '/addinterest';
const SEND_PAGE_ID = '/send';
const DELETE_PERSON_PAGE_ID = '/deleteuser';
const DELETE_INTEREST_PAGE_ID = '/deleteinterest';

export default class InputView {
    constructor() {
        this.views = this.initViews();
        this.inputArticle = document.getElementById('main-section').getElementsByTagName('article')[
            INPUT_ARTICLE_INDEX
        ];
    }

    // eslint-disable-next-line class-methods-use-this
    initViews() {
        const views = new Map();
        views.set(ADD_PERSON_PAGE_ID, () => ViewFactory.getAddPersonView());
        views.set(ADD_INTEREST_PAGE_ID, () => ViewFactory.getAddInterestView());
        views.set(SEND_PAGE_ID, () => ViewFactory.getSendView());
        views.set(DELETE_PERSON_PAGE_ID, () => ViewFactory.getDeletePersonView());
        views.set(DELETE_INTEREST_PAGE_ID, () => ViewFactory.getDeleteInterestView());
        return views;
    }

    renderPage(page) {
        this.clearPage();
        page.renderTo(this.inputArticle);
    }

    clearPage() {
        this.inputArticle.innerHTML = '';
        this.inputArticle.id = 'input';
    }

    routeChanged(route) {
        const currentViewCreator = this.views.get(route.url);
        if (currentViewCreator !== undefined) {
            this.routeToExistingView(currentViewCreator);
            document.title = route.title;
            return true;
        }
        const currentPage = ViewFactory.getDefaultView();
        this.renderPage(currentPage);
        document.title = 'MailSender';
        return false;
    }

    routeToExistingView(currentPageCreator) {
        const currentPage = currentPageCreator();
        this.renderPage(currentPage);
    }
}
