import $ from 'jquery';

export const ups = () => {

    const fragment = $(new DocumentFragment());

    fragment.append('<h2>Wrong way!</h2>')
            .append('<p>Please go back to the main page</p>');

    return fragment;

};