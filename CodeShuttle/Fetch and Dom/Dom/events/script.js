const counterText = document.getElementById('counter');
const posBtn = document.getElementById('posBtn');
const negBtn = document.getElementById('negBtn');
let count = 0;
updateCount();

posBtn.addEventListener('click', (event) => {
    count++;
    updateCount();
})

negBtn.addEventListener('click', (event) => {
    if(count>0){
        count--;
        updateCount();
    }
})

function updateCount(){
    counterText.innerHTML = count;
}

















// const body = document.body;
// const children = body.children[1].children[0].innerHTML = "changed";

// const list = document.getElementById('List');


// console.log(list.lastElementChild.innerHTML="Changed eight");

// const numberIn = document.getElementById('number-input');
// const submitBtn = document.getElementById('submit-button');
// const form = document.getElementById('dummyform');

// submitBtn.addEventListener('click', (event) => {
//     event.preventDefault()
//     console.log(numberIn.value);
// })
// numberIn.value = "abhi";