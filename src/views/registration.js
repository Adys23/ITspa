import $ from 'jquery';
import { routeChange } from '../router/routeChange';


export const registration = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append('<h2>Registation form</h2>')
    .append(`
    <form class="form-horizontal register" action='/registration'>
      <div class="container">
        <div class="row justify-content-around">
          <fieldset>
    
            <div class="control-group">
        <!-- E-mail -->
              <div class="controls">
                <input type="text" id="email" name="email" placeholder="" class="input-xlarge">
              </div>
              <label class="control-label" for="email">E-mail</label>
            </div>

            <div class="control-group">
        <!-- Password-->
              <div class="controls">
                <input type="password" id="password" name="password" placeholder="" class="input-xlarge">
              </div>
              <label class="control-label" for="password">Password</label>
            </div>

            <div class="control-group">
        <!-- User name -->
              <div class="controls">
                <input type="text" id="firstName" name="firstName" placeholder="" class="input-xlarge">
              </div>
              <label class="control-label"  for="firstName">First name</label>
            </div>

            <div class="control-group">
        <!-- User surname -->
              <div class="controls">
                <input type="text" id="lastName" name="lastName" placeholder="" class="input-xlarge">
              </div>
              <label class="control-label"  for="lastName">Surname</label>
            </div>

            <div class="control-group">
        <!-- Phone -->
              <div class="controls">
                <input type="text" id="phone" name="phone" placeholder="" class="input-xlarge">
              </div>
              <label class="control-label"  for="phone">Phone number</label>
            </div>

            <div class="control-group">
        <!-- Button -->
              <div class="controls">
              <button class="btn btn-success registerBtn">Register</button>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </form>
    `);


    $(document).ready(function(){
      $(".register").submit(function(event){
        event.preventDefault();

        const emailInput = $("#email").val();
        const passwordInput = $("#password").val();
        const firstNameInput = $("#firstName").val();
        const lastNameInput = $("#lastName").val();
        const phoneInput = $("#phone").val();

        $.post( 'http://localhost:3000/users', 
                { id: emailInput, 
                  password: passwordInput, 
                  firstName: firstNameInput, 
                  lastName: lastNameInput, 
                  phone: phoneInput } 
              )
        .done((msg) => {
                alert(`Registration successful!`);
                $("body").trigger(routeChange, { path: '/' });
              })
        .fail((xhr, status, error) => {
                alert(`Error: ${error}`)
              })
      });
    });

  

  return Promise.resolve(fragment);
};