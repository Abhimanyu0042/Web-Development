//Javascript is by default synchronous
const a = 23;
const b = 12;
const c = a+b;


const d = 12;
function greet (name) {
    console.log('Hello ',name);
} 

function gn () {
    console.log('Good Night');
} 


//this line is in e-sync mode that is it runs according to its own time
//it is used to set a delay in function 
// setTimeout(greet,2000,'Abhi');

// const timeoutID = setTimeout(() => {  //This can also be used to pass arguments
//     greet('Abhi')
// },2000)

// const GntimeoutID = setTimeout(() => {  //This can also be used to pass arguments
//     gn()
// },4000)

// clearTimeout(timeoutID);

// console.log('This is written after greet.'); //this line will print before hello world

///------------------------------------SET INTERVAL------------------------------------

const intervalid = setInterval(IncreaseCount,2000); //2000 is in milliseconds

let count = 0;
function IncreaseCount(){
    count++;
    console.log(count);

    if(count == 5){
        clearInterval(intervalid)
    }
}

//we can run a function at a fixed interval
