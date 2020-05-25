import $ from 'jquery';
import {
  Cart
} from "./cart";

export const cartView = () => {
  const cart = new Cart();
  const fragment = $(new DocumentFragment());

  let roomsView = $(`
    <div class="row">Selected rooms:</div>
    <div id="showRooms" class="row justify-content-center"></div>
  `);

  let treatmentsView = $(`
    <div class="row">Selected treatments:</div>
    <div id="showTreatments" class="row justify-content-center"></div>
  `);

  let datesView = $(`
    <div class="row">Selected dates:</div>
    <div id="showDates" class="row justify-content-center"></div>
  `);

  fragment.append(roomsView)
    .append(treatmentsView)
    .append(datesView);

  cookieStore.addEventListener('change', (event) => {
    // jesli zaistniala zmiana w cookies,
    // ponownie pobieram zawartosc kosza
    const selectedItems = cart.get();
    let selectedRooms = selectedItems[1];
    let selectedTreatments = selectedItems[2];
    let selectedArrival = selectedItems[3];
    let selectedDeparture = selectedItems[4];

    $('#showRooms').append(selectedRooms)


    // ...i poprawiam wyswietlane przez kosz informacje
    // TODO: zaktualizuj to co wyswietla obecnie koszyk
  });

  return fragment;
};