import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';

import { Cart } from '../cart/cart';




export const booking = () => {
  const fragment = $(new DocumentFragment());

    const sessionCookie = new Cart;
    const parsedValue = sessionCookie.get();

  fragment
    .append('<p>Check-in date: </p>')
    .append(`<div class="container">
    <div class="row">
            <div class="form-group">
                <div class="input-group date" id="datetimepicker" data-target-input="nearest">
                    
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
                     
                    <div class="input-group-append" data-target="#datetimepicker2" data-toggle="datetimepicker">
                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                    </div>
                </div>
            </div>
        </div>
        </div>`)
    .append(
        `<div class="row justify-content-center">
            <button id="submitBtn" type="button" class="btn btn-primary btn-lg">Submit</button>
        </div>
    `);

    const arrival = $('<input id="arrival" type="text" class="form-control datetimepicker-input" data-target="#datetimepicker"/>')
    const departure = $('<input id="departure" type="text" class="form-control datetimepicker2-input" data-target="#datetimepicker2"/>')  

    fragment.find("#submitBtn").on('click', ()=> {
        let arrivalDate = arrival.val();
        let departureDate = departure.val();
        let newCookie = [...parsedValue, arrivalDate, departureDate];
        sessionCookie.set(newCookie);
    })

    fragment.find('#datetimepicker').append(arrival);
    fragment.find('#datetimepicker2').append(departure);

  return Promise.resolve(fragment);
};
