import $ from 'jquery';

export const booking = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append('<p>Select dates: </p>')
    .append(`<div class="input-group date form-group" id="datepicker">
                <input type="text" class="form-control" id="Dates" name="Dates" placeholder="Select days" required />
                <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i><span class="count"></span></span>
              </div>`)

  return Promise.resolve(fragment);
};
