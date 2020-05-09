import { Cart } from '../cart/cart';

export const authenticate = (userID, password) => {

    let currentUser = '';
    const loginCookie = new Cart();

    const users = fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(usersData => {

            let ifUserFound = false;
            
            usersData.forEach(element => {
                if (element.id === userID & element.password === password) {
                    const userName = element.firstName;
                    alert(`Welcome ${userName}`)
                    ifUserFound = true;
                    currentUser = element.id
                    $(".modal-backdrop").remove();
                    $(".modal").toggle().toggleClass("show");
                    $("body").toggleClass("modal-open");
                    loginCookie.cookie();
                    loginCookie.get();
                    loginCookie.set([currentUser]);
                    $('nav').hide().show(0);
                    return currentUser;
                    
                }   
            });

            if (ifUserFound !== true) {
                alert('Incorrect ID or password provided! Please try again.');
            };
        });

    return users;
};