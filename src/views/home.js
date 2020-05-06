import $ from 'jquery';

import { loginModal } from '../common/loginModal';

export const home = () => {
  const fragment = $(new DocumentFragment());

  const loginPage = loginModal;

  fragment
    .append('<div class="container"><div class="row"><h2>Home</h2></div></div>')
    .append('<div class="container"><div class="row"><p>Lorem ipsum dolor sit amet...</p></div></div>')
    .append(`<div class="container">
              <div class="row justify-content-around">
                <button type="button" class="btn btn-primary btn-lg loginBtn" data-toggle="modal" data-target="#loginModal">
                  Login
                </button>
              </div>
            </div>`)
    .append(loginPage);

  return Promise.resolve(fragment);
};
