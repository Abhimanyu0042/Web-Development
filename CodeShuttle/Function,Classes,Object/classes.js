// const student = {
//     name: 'Abhimanyu',
//     marks: 56,
//     talk: function () { 
//         console.log(`my name is ${this.name} and marks are ${this.marks}`);   //${} is used to access variable's value  
//         // `` is used to define string
//         //this is used to access variable in the current object
//         //with => this. doesnt work
//     }
// }

// student.talk();

// const age = 26;

// const message = "my age is " +age; // +<variable name> is used to add a variable as a string in the string 
// const message = `my age is ${age}`;

// console.log(message);

class Vehicle{  //classes are modified version of functions
    constructor(model,wheel){   //constructor is also a function which returns object
        this.model = model;
        this.wheel = wheel;
    }
}

const obj1 = new Vehicle("Fortuner",4) //we can't call vehicle object without new
console.log(obj1);