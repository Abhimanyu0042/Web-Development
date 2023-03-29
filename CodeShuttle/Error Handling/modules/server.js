import * as Utility from "./utility.js";

import { addition as add } from "./utility.js";

import random_name from "./utility.js"; //we can import default by any random name

const a = 5;
const b = 4;

const result = add(a, b);
const diff = Utility.subtraction(a, b);


console.log(result);
console.log(diff);