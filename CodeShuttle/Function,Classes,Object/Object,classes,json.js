const myObj = {
    age:26,
    isHuman: true,
    hobbies: ['singing','dancing']
}

myObj.skill = 'coding';
myObj.name = 'name';

myObj.age = 12;
// console.log(myObj['age']);
// console.log(myObj.isHuman);

// for(const key in myObj){
//     console.log(myObj[key]);
// }

function getVehicle() {    // this method is known as "factory method".
    return{
        type: 'car',
        wheels : 4
    }
}

// const MyVehicle = getVehicle();
// const MyVehicle2 = getVehicle();

// console.log(MyVehicle);
// console.log(MyVehicle2);

// console.log(typeof getVehicle);

//object destructing

const{age: myAge,isHuman} = myObj; //used to convert a key to variable || Its a const variable 
// console.log(isHuman);

//An object can also contain a function.
myObj.walk = function() {
    console.log('person is walking.');
}

myObj.walk()
console.log();