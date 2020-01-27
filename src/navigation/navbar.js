import $ from 'jquery';
import { navItem } from './navItem';
import { routeChange } from '../router/routeChange';
import { routes } from '../router/routes';

export const nav = () => {

    const navbar = $(`
        <nav class= "navbar navbar-expand-lg navbar-dark bg-dark">
            <span class="navbar-brand">IT SPA</span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto"></ul>
            </div>
        </nav>
    `);

    const createNavItems = routes.map(route => {
        const {name,path} = route;
        return navItem(name, () => navbar.trigger(routeChange, { path: path }));
    });

    navbar.find('ul').append(createNavItems);

    return navbar;
}