import $ from 'jquery';

import {authenticate} from './authenticate';

export const loginModal = () => {

    const fragment = $(new DocumentFragment());

    const modal = $(`
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="loginModalLabel">Log in</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <form>
        <div class="form-group" id="emailFG">
          <label for="inputEmail1">Email address</label>
        </div>
        <div class="form-group" id="passFG">
          <label for="inputPassword1">Password</label>
        </div>
      </form>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>`)

    const emailInput = $(`<input type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp">`); 

    const passInput = $(`<input type="password" class="form-control" id="inputPassword1">`);

    const signUpLink = $(`<button type="button" class="btn btn-link" id="signUp">Sign up if do not have an account yet</button>`);

    const submitLogin = $(`<button type="submit" class="btn btn-primary" id="submitLogin">Login</button>`);

    modal.find('#emailFG').append(emailInput);

    modal.find('#passFG').append(passInput);

    modal.find('.modal-footer').append(signUpLink)
                                .append(submitLogin);

    signUpLink.on('click', () => {
      console.log('signed up');
    });
    
    submitLogin.on('click', () => {
      let userID = emailInput.val();
      let password = passInput.val();
      authenticate(userID,password);
    });

    fragment.append(modal);

  return fragment;


}