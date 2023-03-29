const a = [1, 2, 3, 4,5, 6, 7, 8];

function isEven(num){
    return num%2 == 0;
}
function isOdd(num){
    return num%2!=0;
}
// const b = a.filter((element) => { //this filter function take boolean value to filter
    
//     // console.log(element, index, arr);
//     // return true;
//     return element%3==0;
// });

// const b = a.filter(isEven); 

function square(num) {
    return num*num;
}

//like we want the sqaure or negative value 

function negative(num) {
    return -num;
}

// const b = a.map(negative);
console.log(a);
//diff in filter and map is filter is used to modify array and filter is used to filter the array
//filter expects a number which is boolean i.e. true or false

const find = a.find((element) => element%2 == 0);
console.log(find);

const b = a.map((x) => 'my num is '+x);
console.log(b);


const students = [{
    name: "Anuj",
    marks: 12
}, {
    name: "Shivam",
    marks: 67
}, {
    name: "Sanchita",
    marks: 76
}, {
    name: "Raj",
    marks: 87
}
]
const grades = students.map((element) => {
    if(element.marks < 50) {
        element.isPassed = false; //we can add an object whenever we wants in a json array. Here we added isPassed object
    }else{
        element.isPassed = true;
    }
    return element; 
})

//find command returns only one value however filter command is different, it returns in json value

const found = students.filter((element) => {
    return element.marks > 50;
})

console.log(grades);