const input = document.getElementById("input-value");
const a = input;
const b = Number(prompt("Enter the second number"));
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