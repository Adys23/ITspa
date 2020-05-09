import $ from 'jquery';
import 'jquery-ui';
import 'jquery-ui-bundle';
import 'jquery-ui-multidatespicker';
import 'bootstrap/dist/css/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';

import './it-spa.scss';

import { Router } from './router/router';
import { nav } from './navigation/navbar';
import { Cart } from './cart/cart';


const main = $('main');

const router = new Router();
const cookie = new Cart();

router.mount(main);

router.init();

main.before(nav());

console.log(document.cookie)
