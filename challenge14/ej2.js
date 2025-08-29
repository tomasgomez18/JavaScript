/* Agregar un elemento al final del array:
Crea una función que reciba un array y un elemento, y lo agregue al final usando */
let entrada = prompt("Ingrese un elemento para agregarlo al array")
let arrayDef = [1, 2, 3, 4, 5]

function array (entrada, arrayDef){
    arrayDef.push(entrada) 
    return arrayDef;
}
let resultado = array(entrada, arrayDef)
console.log(resultado);