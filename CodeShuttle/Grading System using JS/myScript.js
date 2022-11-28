const a = prompt("Enter the marks :");
console.log("The Grade will be - ")
switch(true){
    case (a>=95):
        console.log("A");
        break;
    case (a>=80):
        console.log("B");
        break;
    case (a>=65):
        console.log("C");
        break;
    case (a>=50):
        console.log("D");
        break;
    case (a>=10):
        console.log("E");
        break;
}