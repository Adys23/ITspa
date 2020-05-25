import $ from 'jquery';

import CartItems from '../cart/cartItems';


export const cartView = () => {
    const fragment = $(new DocumentFragment());

    fragment
        .append('<div class="container"><div class="row"><h2>Confirm your booking:</h2></div></div>')
        .append(CartItems);

    return Promise.resolve(fragment);
};