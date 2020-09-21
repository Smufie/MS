export default class RouteCollection {
    constructor() {
        this.routes = createRoutes();
    }

    getRoute(pathName) {
        let result = this.routes[0];
        result = this.routes.filter((route) => {
            return route.url === pathName;
        });
        // TODO filter
        return result;
    }
}

function createRoutes() {
    return [
        // TODO json
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
