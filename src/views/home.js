import $ from 'jquery';

import { loginModal } from '../common/loginModal';

export const home = () => {
  const fragment = $(new DocumentFragment());

  const loginPage = loginModal;

  fragment
    .append('<h2>Home</h2>')
    .append('<p>Lorem ipsum dolor sit amet...</p>')
    .append(`<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#loginModal">
                Login
              </button>`)
    .append(loginPage);

  return Promise.resolve(fragment);
};
