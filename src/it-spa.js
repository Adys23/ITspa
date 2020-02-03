import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import './it-spa.scss';

import { Router } from './router/router';
import { nav } from './navigation/navbar';


const main = $('main');

const router = new Router();

router.mount(main);

router.init();

main.before(nav());
