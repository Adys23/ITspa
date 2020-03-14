import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';




export const booking = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append('<p>Select dates: </p>')
    .append(`<div class="container">
    <div class="row">
        <div class="col-sm-6">
            <div class="form-group">
                <div class="input-group date" id="datetimepicker4" data-target-input="nearest">
                    <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker4"/>
                    <div class="input-group-append" data-target="#datetimepicker4" data-toggle="datetimepicker">
                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>`);

    $(document).ready(function(){
      $(function () {
         $('#datetimepicker2').datetimepicker({
            format: 'L',
            locale: 'pl'
         });
     });
  })  

  

  return Promise.resolve(fragment);
};
