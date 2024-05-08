import * as readlineSync from "readline-sync";

let altura: number= readlineSync.questionInt ("ingrese la altura");
let base: number= readlineSync.questionInt ("ingrese base ");
let area :number = base * altura

console.log ("el valor del area es :"+ area );