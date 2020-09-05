import InputView from './InputView';

export default class Router {
    constructor() {
        this.routes = createRoutes();
        this.view = new InputView();
        window.onpopstate = () => {
            this.route();
        };
    }

    route() {
        const pathName = window.location.pathname;
        for (let i = 0; i < this.routes.length; i += 1) {
            const routeExist = this.routes[i].url === pathName;
            if (routeExist) {
                this.view.routeChanged(this.routes[i]);
                this.routes[i].wasCreated = true;
                return;
            }
        }
        this.view.routeChanged(this.routes[0]);
    }
}

function createRoutes() {
    return [
        {
            name: 'indexPage',
            url: '/',
            id: 0,
            wasCreated: true,
        },

        {
            name: 'Add',
            url: '/adduser',
            id: 1,
            wasCreated: false,
        },

        {
            name: 'Send',
            url: '/send',
            id: 2,
            wasCreated: false,
        },

        {
            name: 'Delete',
            url: '/deleteuser',
            id: 3,
            wasCreated: false,
        },
    ];
}
