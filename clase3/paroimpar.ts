import * as readlineSync from "readline-sync";
  let numero:number= readlineSync.questionInt ("Ingrese numero ");
    
    if (numero /2 == 0)
        {console.log ("el numero es igual a 0")}
        else {
            if (numero % 2 == 0 )
                {console.log ("el numero es par ")}
            else
                { console.log ("el numero es impar ")};
}
