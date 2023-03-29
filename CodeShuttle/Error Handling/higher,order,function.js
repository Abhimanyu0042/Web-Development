const a = [1, 2, 3, 4, 5, 6];

function filterNumbers(conditionFunction) { //this is known as higher order function
    const b = [];
    for(let i = 0; i<a.length;i++){
        if(conditionFunction(a[i])){
            b.push(a[i]);
        }
    }
    return b;
}

function isEven(num) {
    return num % 2 == 0;
}

function isOdd(num) {
    return num % 2 != 0;
}

const evenNumbers = filterNumbers(isOdd);
console.log(evenNumbers);