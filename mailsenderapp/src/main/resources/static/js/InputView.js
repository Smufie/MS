import InputComponentsFactory from './InputComponentsFactory';

const INPUT_SPACE_INDEX = 0;
const ADD_INPUT = 1;
const SEND_INPUT = 2;
const DELETE_INPUT = 3;

// TODO factory wzorzec

export default class InputView {
    constructor() {
        this.displays = this.fillDisplays();
        this.inputArticle = document.getElementById('main-section').getElementsByTagName('article')[
            INPUT_SPACE_INDEX
        ];
        this.views = [];
        this.views[0] = initWithDefaultView();
        this.displayDefault();
    }

    fillDisplays() {
        const displays = new Map();
        displays.set(ADD_INPUT, (route) => this.displayAddView(route));
        displays.set(SEND_INPUT, (route) => this.displaySendView(route));
        displays.set(DELETE_INPUT, (route) => this.displayDeleteView(route));
        return displays;
    }

    routeChanged(route) {
        this.deletePreviousPage();
        const display = this.displays.get(route.id);
        if (display !== undefined) {
            display(route);
        } else {
            this.displayDefault();
        }
    }

    displayDefault() {
        this.showView(0);
    }

    displayDeleteView(route) {
        if (!route.wasCreated) {
            this.views[route.id] = InputComponentsFactory.createDeletePage(this.observer);
        }
        document.title = 'Delete person';
        this.showView(route.id);
    }

    displaySendView(route) {
        if (!route.wasCreated) {
            this.views[route.id] = InputComponentsFactory.createSendPage(this.observer);
        }
        document.title = 'Send';
        this.showView(route.id);
    }

    displayAddView(route) {
        if (!route.wasCreated) {
            this.views[route.id] = InputComponentsFactory.createAddPage(this.observer);
        }
        document.title = 'Add person';
        this.showView(route.id);
    }

    showView(viewIndex) {
        this.views[viewIndex].renderTo(this.inputArticle);
    }

    deletePreviousPage() {
        this.inputArticle.innerHTML = '';
        this.inputArticle.id = 'input';
    }
}

function initWithDefaultView() {
    const defaultView = InputComponentsFactory.createDefaultPage();
    return defaultView;
}
