/* Crea una función que reciba un string y devuelva la cantidad de vocales que contiene. */

let entradaTexto = prompt("Ingrese un texto");

function vocales(entradaTexto) {
    let contador = 0;
    for (let i = 0; i < entradaTexto.length; i++) {
        if ('aeiouAEIOU'.includes(entradaTexto[i])) {
            contador++;
        }
    }
    return contador;
}

let resultado = vocales(entradaTexto);
console.log(`El texto "${entradaTexto}" tiene ${resultado} vocales`);