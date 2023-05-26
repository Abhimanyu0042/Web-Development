
const userCard = document.getElementById('profile-card');
const container = document.getElementById('container');

async function fetchData(){
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    const users = data.users;

    bindData(users);
}
function bindData(users){
    users.forEach((user) => {
        const userCardClone = userCard.cloneNode(true);
        const userimg = userCardClone .querySelector('#user-img');
        const username = userCardClone .querySelector('#user-name');
        const usermail = userCardClone .querySelector('#user-email');
    
        userimg.src = user.image;
        username.innerHTML = `${user.firstName} ${user.lastName}`;
        usermail.innerHTML = user.email;

        container.appendChild(userCardClone);
    });


    }

fetchData();