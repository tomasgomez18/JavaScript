/* Crea una función que reciba dos números y un operador (+, -, *, /). Devuelva el resultado de la operación. Si el operador no es válido, mostrar error.
 */

let entrada1= parseFloat(prompt("Ingrese el primer numero"));
let entrada2= parseFloat(prompt("Ingrese el segundo numero"));
let operador = prompt("Ingrese: + (sumar), - (restar), / (dividir, * (multiplicar)")

let resultadoSuma = entrada1 + entrada2;
let resultadoResta = entrada1 - entrada2;
let resultadoDIvision = entrada1 / entrada2;
let resultadoMultiplicacion = entrada1 * entrada2


function operacion (entrada1, entrada2, operacion){

    if (operador==="+"){
        return  `La suma de ${entrada1} y ${entrada2} es ${resultadoSuma}`;
        }    else if (operador === "-"){
        return `La resta de ${entrada1} y ${entrada2} es ${resultadoResta}`;
    }else if (operador === "/"){
        return `La diviision de ${entrada1} y ${entrada2} es ${resultadoDIvision}`;
    }
    else if (operador === "*"){
        return `La multiplicacion de ${entrada1} y ${entrada2} es ${resultadoMultiplicacion}`;
    }

}

let resultados = operacion (entrada1, entrada2, operacion);
document.writeln(operacion (entrada1, entrada2, operacion));
