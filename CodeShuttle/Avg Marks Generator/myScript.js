const a = Number(prompt("Enter the marks of first subject : "));
const b = Number(prompt("Enter the marks of second subject : "));
const c = Number(prompt("Enter the marks of third subject : "));
const d = Number(prompt("Enter the marks of fourth subject : "));
const e = Number(prompt("Enter the marks of fifth subject : "));
const n = Number(prompt("Total number of subjects : "));

let s = Number(a + b + c + d + e)
const average = s/n;
console.log("The average marks of student is ", average);