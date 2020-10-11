import routesData from '../routes.json';

export default class RouteCollection {
    constructor() {
        this.routes = routesData;
    }

    getRoute(pathName) {
        const result = this.routes.filter((route) => {
            return route.url === pathName;
        });
        const arrayIsEmpty = result.length === 0;
        if (arrayIsEmpty) {
            return this.routes[0];
        }
        return result[0];
    }
}
