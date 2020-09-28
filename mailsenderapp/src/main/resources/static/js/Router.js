import RouteCollection from './RouteCollection';
import InputView from './InputView';

export default class Router {
    constructor() {
        this.manager = new RouteCollection();
        this.view = new InputView();
        window.onpopstate = () => {
            this.route();
        };
        this.establishMenuRouting();
    }

    route() {
        const pathName = window.location.pathname;
        const targetRoute = this.manager.getRoute(pathName);
        const wasRouted = this.view.routeChanged(targetRoute);
        return wasRouted;
    }

    establishMenuRouting() {
        const links = document.getElementById('menu').getElementsByTagName('a');
        Array.from(links).forEach((link) => {
            link.addEventListener('click', (event) => {
                this.changeURL(event);
            });
        });
    }

    changeURL(event) {
        const hyperlink = event.target.getAttribute('data-href');
        window.history.pushState(null, '', hyperlink);
        this.route();
        return hyperlink;
    }
}
