import $ from 'jquery';

export const rooms = () => {

    const fragment = $(new DocumentFragment());

    fragment.append('<h2>Rooms</h2>')
            .append('<p>lorem</p>');

    return fragment;

};