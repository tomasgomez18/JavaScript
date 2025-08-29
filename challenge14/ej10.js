/* Crea una función que reciba un texto y devuelva su primera letra con .charAt(). */

let entradaTexto = prompt("Ingresese un texto");


function primeraLetra(entradaTexto){
  return entradaTexto.charAt(0)
}

let resultado = primeraLetra(entradaTexto);
console.log(resultado);