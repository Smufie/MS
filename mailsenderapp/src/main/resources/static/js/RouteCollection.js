export default class RouteCollection {
    constructor() {
        this.routes = createRoutes();
    }

    getRoute(pathName) {
        // TODO ?
        // eslint-disable-next-line consistent-return
        this.routes.forEach((route) => {
            const routeExist = route.url === pathName;
            if (routeExist) {
                return route;
            }
        });
        return this.routes[0];
    }
}

function createRoutes() {
    return [
        {
            name: 'MailSender',
            url: '/',
            title: 'MailSender',
        },

        {
            name: 'Add',
            url: '/adduser',
            title: 'MailSender | Add user',
        },

        {
            name: 'Send',
            url: '/send',
            title: 'MailSender | Send',
        },

        {
            name: 'Delete',
            url: '/deleteuser',
            title: 'MailSender | Delete user',
        },
    ];
}
