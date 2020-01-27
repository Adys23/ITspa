import $ from 'jquery';


export const treatment = (name, area, time, price, click) => {

    const treatmentsName = $(`<h5 class="card-title"></h5>`);
    const bodyArea = $(`<p class="card-text"></p>`);
    const treatmentTime = $(`<p class="card-text"></p>`);
    const treatmentPrice = $(`<p class="card-text__price"></p>`);

    const treatmentCard = $(
        `<div class="card treatment-card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
        </div>`
        );
    
    const cardBody = $(`<div class="card-body"></div>`);

    const anchor = $('<a href="#" class="btn btn-dark">Go somewhere</a>');
    anchor.on('click', click);


    treatmentsName.text(name);
    bodyArea.text(`Affected body area: ${area}`)
    treatmentTime.text(`Duration: ${time} minutes`)
    treatmentPrice.text(`PRICE: ${price} PLN`)

    cardBody.append(treatmentsName)
            .append(bodyArea)
            .append(treatmentTime)
            .append(treatmentPrice)

    treatmentCard.append(cardBody)
                .append(anchor);

    

    return treatmentCard;
}