import $ from 'jquery';
import { treatmentsService } from '../common/treatments-service';
import {treatment} from '../common/treatment';

export const treatments = () => {
  const fragment = $(new DocumentFragment());

  fragment.append('<p>Our SPA treatments offer: </p>')

  return treatmentsService.getTreatments().then(treatmentData => {

    treatmentData.forEach(element => {

      fragment
      .append(treatment(element.name, element.area, element.time, element.price));

    });

    return fragment;
  });
};
