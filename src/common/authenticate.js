
export const authenticate = (userID, password) => {

    const users = fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(usersData => {

            let ifUserFound = false;
            
            usersData.forEach(element => {
                if (element.id === userID & element.password === password) {
                    const userName = element.firstName;
                    alert(`Welcome ${userName}`)
                    ifUserFound = true;
                    $(".modal-backdrop").remove();
                    $(".modal").toggle().toggleClass("show");
                    $("body").toggleClass("modal-open")
                }   
            });

            if (ifUserFound !== true) {
                alert('Incorrect ID or password provided! Please try again.');
            } 

        });
};