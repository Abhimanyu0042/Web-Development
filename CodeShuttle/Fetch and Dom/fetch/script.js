// const respons = fetch('https://dummyjson.com/products').then((respons) => {

// })
// .catch(err => {

// })
// console.log(respons);

async function fetchData(){
    try{

        const loadingele = document.getElementById('loading');
        const phoneBox = document.getElementById('Box');

        phoneBox.style.display = 'none'; //to set loading animation but here we are using simple text 
        loadingele.style.display = 'block';

        const respons = await fetch('https://dummyjson.com/products/1');  //it will make request and revert back with a response object
        console.log(respons);
        // const jsonData = respons.json(); //to get data from response.json we use await. Without it , it will just return promise
        const jsonData = await respons.json(); //convert it into json format
        console.log(jsonData);

        phoneBox.style.display = 'block';
        loadingele.style.display = 'none';



        loadData(jsonData);

    }
    catch(err){
        console.log(err);
    }
    
}

function loadData(jsonData){
    const phonetextele = document.getElementById('phone-title');
    const phonedesc = document.getElementById('phone-desc');
    const phoneimg = document.getElementById('phone-img');

    const { title, description, thumbnail } = jsonData;

    phonetextele.innerHTML = title;
    phonedesc.innerHTML = description;
    phoneimg.src = thumbnail;


}

fetchData();