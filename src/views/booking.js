import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';




export const booking = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append('<p>Check-in date: </p>')
    .append(`<div class="container">
    <div class="row">
            <div class="form-group">
                <div class="input-group date" id="datetimepicker" data-target-input="nearest">
                    <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker"/>
                    <div class="input-group-append" data-target="#datetimepicker" data-toggle="datetimepicker">
                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                    </div>
                </div>
            </div>
        </div>
        </div>`)
    .append('<p>Check-out date: </p>')
    .append(`<div class="container">
    <div class="row">
            <div class="form-group">
                <div class="input-group date" id="datetimepicker2" data-target-input="nearest">
                     <input type="text" class="form-control datetimepicker2-input" data-target="#datetimepicker2"/>
                    <div class="input-group-append" data-target="#datetimepicker2" data-toggle="datetimepicker">
                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                    </div>
                </div>
            </div>
        </div>
        </div>`);

    $(document).ready(function(){
      $(function () {
         $('#datetimepicker').datetimepicker({
            format: 'L',
            locale: 'pl'
         });
     });
  });

  $(document).ready(function(){
    $(function () {
       $('#datetimepicker').datetimepicker({
          format: 'L',
          locale: 'pl'
       });
   });
});
  

  return Promise.resolve(fragment);
};
