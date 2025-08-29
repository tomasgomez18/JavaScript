/* Crea una función que reciba dos números y devuelva su suma. */

let entradaNum1 = parseInt(prompt("Ingrese el primer numero"));
let entradaNum2 = parseInt(prompt("Ingrese el segundo numero"));

function sumaNum (entradaNum1, entradaNum2){
    return entradaNum1 + entradaNum2;
}
let resultado = sumaNum (entradaNum1, entradaNum2)
alert(`El resultado de ${entradaNum1} + ${entradaNum2} = ${resultado}`)