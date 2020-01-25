import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import { Router } from './router/router';

const main = $('main');

const router = new Router();

router.mount(main);

router.init();

