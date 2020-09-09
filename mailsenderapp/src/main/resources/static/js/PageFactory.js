import AddInputComponent from './components/AddInputComponent';
import DeleteInputComponent from './components/DeleteInputComponent';
import SendInputComponent from './components/SendInputComponent';
import DefaultInputComponent from './components/DefaultInputComponent';

const INPUT_ARTICLE_INDEX = 0;

export default class PageFactory {
    constructor() {
        this.inputArticle = document.getElementById('main-section').getElementsByTagName('article')[
            INPUT_ARTICLE_INDEX
        ];
        this.pages = [];
        this.pages[0] = initWithDefaultPage();
        this.displayDefaultPage();
    }

    renderPage(viewIndex) {
        this.clearPage();
        this.pages[viewIndex].renderTo(this.inputArticle);
    }

    displayDefaultPage() {
        document.title = 'MailSender';
        this.renderPage(0);
    }

    displayDeletePage(route) {
        if (!route.wasCreated) {
            this.pages[route.id] = new DeleteInputComponent();
        }
        document.title = 'MailSender | Delete person';
        this.renderPage(route.id);
    }

    displaySendPage(route) {
        if (!route.wasCreated) {
            this.pages[route.id] = new SendInputComponent();
        }
        document.title = 'MailSender | Send';
        this.renderPage(route.id);
    }

    displayAddPage(route) {
        if (!route.wasCreated) {
            this.pages[route.id] = new AddInputComponent();
        }
        document.title = 'MailSender | Add person';
        this.renderPage(route.id);
    }

    clearPage() {
        this.inputArticle.innerHTML = '';
        this.inputArticle.id = 'input';
    }
}

function initWithDefaultPage() {
    const defaultView = new DefaultInputComponent();
    return defaultView;
}