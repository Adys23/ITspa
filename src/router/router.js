import $ from 'jquery';
import {routes} from './routes';
import {ups} from '../views/ups';


export class Router {

    constructor() {
        this.body = $(document.body);
        this.outlet = $('main');
        this.routes = routes;
    }

    mount(outlet) {
        this.outlet = outlet;
    }

    init() {
        this.navigate(location.pathname);
    }

    get(path) {
        return this.routes.find(route => route.path === path);
    }

    has(path) {
        return this.get(path) !== undefined;
    }

    navigate(path, data = {}) {

        if (this.has(path)) {
            const {component} = this.get(path);

            //clear main element in html and append fragment from specified js view to it 
            this.outlet.empty().append(component());
            
        } else {
            this.outlet.empty().append(ups());
        }
        history.pushState(data, '', path);
    }

}