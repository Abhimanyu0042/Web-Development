try {
// console.log(x); //x is a variable which is not even declared
console.log('No error Occured')
}
//its used to handle errors gracefully
catch(e) {
    console.log(e);
console.log('The error occured');
}
finally{ //it will run always, disregarding the error comes or not
    console.log('This line will always be executed');
};  
