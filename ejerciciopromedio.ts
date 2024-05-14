import * as readlineSync from "readline-Sync" ;

let suma, nota, promedio , contador : number;

contador =1 ;
suma= 0;

while (contador <=10) {
    nota= readlineSync.questionInt( "ingrese su nota ");
    suma= suma + nota;
    
    contador= contador +1;
}
promedio = suma /10;
console.log ("el promedio del alumno es " + promedio);