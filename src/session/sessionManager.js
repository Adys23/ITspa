import $ from 'jquery';

import { Cart } from '../cart/cart';

export const navTimer = () => {

    const sessionCookie = new Cart();
  
    const navTimer =  
        $(`
            <div class="timer">     
            </div>
        `);

    let sessionTime = 180000;
    let tickDuration = 1000;
    let sessionSec = 180;
    let secDisplay;

    let myInterval = setInterval(function() {
        
        let sessionMin = Math.floor(sessionTime/60000);

        if (((sessionTime/1000)%60) === 0) {
            secDisplay = "00";
        } else {
            secDisplay = (sessionTime/1000)%60
        };
        
        $(".timer").text("Session time left: " + sessionMin + ":" + secDisplay);

        sessionTime = sessionTime - tickDuration
        sessionSec -=  1;
        
    }, 1000);

    let myTimeOut = setTimeout(SessionExpireEvent, sessionTime);

    $("html").click(function() {
        clearTimeout(myTimeOut);
        sessionTime = 180000;
        myTimeOut = setTimeout(SessionExpireEvent, sessionTime);
    });

    function SessionExpireEvent() {
        clearInterval(myInterval);
        sessionCookie.empty();
        alert("Session expired");
    }

    return navTimer;
  }

