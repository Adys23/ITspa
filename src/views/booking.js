import $ from 'jquery';


export const booking = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append('<p>Select dates: </p>')
    .append(`<input type = "text" id = "datepickerStart">
            <input type = "text" id = "datepickerEnd">`)

  $(function() {
    $( "#datepickerStart" ).datepicker({
       prevText:"click for previous months",
       nextText:"click for next months",
       showOtherMonths:true,
       selectOtherMonths: false
    });
    $( "#datepickerEnd" ).datepicker({
       prevText:"click for previous months",
       nextText:"click for next months",
       showOtherMonths:true,
       selectOtherMonths: true
    });
 });

  

  return Promise.resolve(fragment);
};
