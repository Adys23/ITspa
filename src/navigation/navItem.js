import $ from 'jquery';

export const navItem = (text, click) => {

    const navItem = $(`<li class="nav-item"></li>`);

    const anchor = $('<a class="nav-link text-light"></a>');

    anchor.text(text);
    anchor.on('click', click);

    navItem.append(anchor);

    return navItem;
}