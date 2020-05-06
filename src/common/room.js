import $ from 'jquery';
import { Cart } from '../cart/cart';


export const room = (name, beds, guests, price) => {

    const Cookie = new Cart;
    const roomsName = $(`<h5 class="card-title"></h5>`);
    const bedsNo = $(`<p class="card-text"></p>`);
    const guestsNo = $(`<p class="card-text"></p>`);
    const roomPrice = $(`<p class="card-text__price"></p>`);

    const roomCard = $(
        `<div class="card room-card">
            <img src="..." class="card-img-top" alt="...">
        </div>`
        );
    
    const cardBody = $(`<div class="card-body"></div>`);

    const anchor = $('<a href="/treatments" class="btn btn-dark">Book now</a>');
    anchor.on('click', () => {
        console.log(`This is current cookie: ${document.cookie}`);
        Cookie.set(name);
        console.log(`This is new cookie: ${document.cookie}`);
    });

    roomsName.text(name);
    bedsNo.text(`Number of beds: ${beds}`)
    guestsNo.text(`Number of guests: ${guests}`)
    roomPrice.text(`PRICE: ${price} PLN`)

    cardBody.append(roomsName)
            .append(bedsNo)
            .append(guestsNo)
            .append(roomPrice)

    roomCard.append(cardBody)
            .append(anchor);

    

    return roomCard;
}