import * as readlineSync from "readline-sync"

let base: number = readlineSync.questionInt (" ingrese valor de base ");
let exponente: number = readlineSync.questionInt( "ingrese valor de exponente");

function calcularPotencia   (base: number, exponente: number) {

    let resultado :number =1;
    let cont :number =1;

     if ( exponente == 0) {
        console.log ("el resultado es 1" );
     } else 
        if (exponente > 0) {
          for (cont = 0; cont < exponente; cont++) {
             resultado = resultado * base;}
          }
          return resultado
        }
    let resultadoPot = calcularPotencia (base,exponente) ;
    console.log ("el resultado es " + resultadoPot);
    
     

