import * as readlineSync from "readline-sync";
 
let primeraVuelta: number = readlineSync.questionInt ("ingrese tiempo de primera vuelta");
console.log("la primera vuelta fue en" + primeraVuelta);
let segundaVuelta: number = readlineSync.questionInt ("ingrese tiempo de segunda vuelta");
console.log("la segunda vuelta fue en" + segundaVuelta);
let terceraVuelta: number = readlineSync.questionInt ("ingrese tiempo de tercera vuelta");
console.log("la tercera vuelta fue en" + terceraVuelta);
let cuartaVuelta: number = readlineSync.questionInt ("ingrese tiempo de cuarta vuelta");
console.log("la cuarta vuelta fue en" + cuartaVuelta);

let tiempoTotal: number = primeraVuelta+segundaVuelta+terceraVuelta+cuartaVuelta;
console.log ("el tiempo total es de" + tiempoTotal);

let tiempopromedio: number = tiempoTotal /4;
console.log ("el tiempo promedio es de " +tiempopromedio);