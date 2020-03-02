import $ from 'jquery';

export const registration = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append('<h2>Registation form</h2>')
    .append(`
    <form class="form-horizontal register" action='' method="POST">
      <div class="container">
        <div class="row justify-content-around">
          <fieldset>
    
            <div class="control-group">
        <!-- E-mail -->
              <label class="control-label" for="email">E-mail</label>
              <div class="controls">
                <input type="text" id="email" name="email" placeholder="" class="input-xlarge">
                <p class="help-block">E-mail address will be also your login ID</p>
              </div>
            </div>

            <div class="control-group">
        <!-- Password-->
              <label class="control-label" for="password">Password</label>
              <div class="controls">
                <input type="password" id="password" name="password" placeholder="" class="input-xlarge">
              </div>
            </div>

            <div class="control-group">
        <!-- User name -->
              <label class="control-label"  for="firstName">First name</label>
              <div class="controls">
                <input type="text" id="firstName" name="firstName" placeholder="" class="input-xlarge">
              </div>
            </div>

            <div class="control-group">
        <!-- User surname -->
              <label class="control-label"  for="lastName">Surname</label>
              <div class="controls">
                <input type="text" id="lastName" name="lastName" placeholder="" class="input-xlarge">
              </div>
            </div>

            <div class="control-group">
        <!-- Phone -->
              <label class="control-label"  for="phone">Phone number</label>
              <div class="controls">
                <input type="text" id="phone" name="phone" placeholder="" class="input-xlarge">
                <p class="help-block">Please provide your phone number</p>
              </div>
            </div>

            <div class="control-group">
        <!-- Button -->
              <div class="controls">
              <button class="btn btn-success">Register</button>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </form>
    `);

  $(".register").submit(() => {

    // Stop form from submitting normally
  // event.preventDefault();

  // Get the values from elements on the form:
  const emailInput = $("#email").val();
  const passwordInput = $("#password").val();
  const firstNameInput = $("#firstName").val();
  const lastNameInput = $("#lastName").val();
  const phoneInput = $("#phone").val();

  // Send the data using post
  const posting = post( 'http://localhost:3000/users', 
                        { id: emailInput, 
                          password: passwordInput, 
                          firstName: firstNameInput, 
                          lastName: lastNameInput, 
                          phone: phoneInput } 
                      )
                  .done((msg) => {
                    alert(`Registration successful! ${msg}`)
                  })
                  .fail((xhr, status, error) => {
                    alert(`Error: ${error} with status: ${status}`)
                  })
  });

  return Promise.resolve(fragment);
};