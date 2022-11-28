const a = prompt("Enter the first number");
const b = prompt("Enter the second number");
const c = prompt("Enter the operator you want to use");

switch(c){
    case '+':
        console.log(a+b);
        break;
    case '-':
        console.log(a-b);
        break;
    case '*':
        console.log(a*b);
        break;
    case '/':
        console.log(a/b);
        break;
    case '%':
        console.log(a%b);
        break;
}