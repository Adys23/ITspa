import { home, rooms, treatments, booking, registration } from '../views';

export const routes = [
  { name: 'Home', path: '/', data: {}, component: home },
  { name: 'Rooms', path: '/rooms', data: {}, component: rooms },
  { name: 'Treatments', path: '/treatments', data: {}, component: treatments },
  { name: 'Booking', path: '/booking', data: {}, component: booking },
  { name: 'Registration', path: '/registration', data: {}, component: registration }
];
