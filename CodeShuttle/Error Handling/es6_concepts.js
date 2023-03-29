const obj = {
    name: "Anuj",
    age: 26
}

const{name, age} = obj;
// console.log(name, age);

function greet(name = 'Learner') {  //if value of name is not taken then default para is taken as learner
    console.log("hello " + name);
}

// greet();
// greet("Abhimanyu");


//spread operator its syntax is[...] 
function greet(...a){
    console.log('hello',a[2]) //we can access value by calling an array
}
greet('abhi','Kashu','Vasu',19)

//nesting of array 
const a = [1,2,3,4];
const b = [5,...a,6,7,8];
const c = [a,6,7,8,9];

console.log(b); //concatenates array using spread operator
console.log(c); //nested array