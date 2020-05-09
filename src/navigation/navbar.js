import $ from 'jquery';
import { navItem } from './navItem';
import { navTimer } from '../session/sessionManager';
import { routeChange } from '../router/routeChange';
import { routes } from '../router/routes';
import { Cart } from '../cart/cart';

export const nav = () => {

    const sessionCoookie = new Cart();

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

    const userLoggedIn = sessionCoookie.get();


    navbar.find('ul').append(createNavItems);

    console.log(userLoggedIn);

    if (userLoggedIn.length != 0) {
        navbar.append(navTimer);
    };
        

    return navbar;
}