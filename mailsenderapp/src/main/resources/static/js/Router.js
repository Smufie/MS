import InputView from './InputView';

export default class Router {
    constructor() {
        this.routes = createRoutes();
        this.view = new InputView();
        window.onpopstate = () => {
            this.route();
        };
        this.establishMenuRouting();
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

    establishMenuRouting() {
        const links = document.getElementById('menu').getElementsByTagName('a');
        for (let i = 0; i < links.length; i += 1) {
            links[i].addEventListener('click', (event) => {
                const hyperlink = event.target.getAttribute('data-href');
                window.history.pushState(null, '', hyperlink);
                this.route();
            });
        }
    }
}

function createRoutes() {
    return [
        {
            name: 'MailSender',
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
