import $ from 'jquery';
import { roomsService } from '../common/rooms-service';
import {room} from '../common/room';

export const rooms = () => {
  const fragment = $(new DocumentFragment());

  fragment.append('<p>Select your room: </p>')

  return roomsService.getRooms().then(roomData => {

    roomData.forEach(element => {

      fragment
        .append(room(element.name, element.beds, element.guests, element.price));

    });

    return fragment;
  });
};
