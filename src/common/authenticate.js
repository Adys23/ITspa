import $ from 'jquery';

export const authenticate = (userID, password) => {

    const users = fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(usersData => {
            
            usersData.forEach(element => {
                console.log(element)
                if (element.id === userID & element.password === password) {
                    const userName = element.firstName;
                    return userName;
                } else {
                    alert('Incorrect ID or password provided! Please try again.')
                }
            })

        });
};