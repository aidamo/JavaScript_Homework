import {Basic} from "./Basic";
import {Expert} from "./Expert";

let calc= new Basic();
let calcExp = new Expert();
console.log(calc.sum(2,3,4,5,6));
console.log(calc.dif(43, 5,14))
console.log(calc.mul(7, 3,8))
console.log(calc.div(12, 6,2))
console.log(calcExp.pow(2, 5))
console.log(calcExp.fact(5))
console.log(calcExp.sqrt(225))