class Vehicle{  //classes are modified version of functions
    constructor(model,wheel){   //constructor is also a function which returns object
        this.model = model;
        this.wheel = wheel;
    }
}

const obj1 = new Vehicle("Fortuner",4) //we can't call vehicle object without new


const jsonString = '{"name":"Abhimanyu","Age":"20"}'
const jsonObject = JSON.parse(jsonString);   //JSON.parse is used to convert a json to javascript object
console.log(jsonObject);

const backtostring = JSON.stringify(obj1); //used to convert a object to json string
console.log(backtostring);
