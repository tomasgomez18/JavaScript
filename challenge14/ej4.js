/* Crea una función que reciba un array y elimine su primer elemento usando .shift() */


let arrayDef = [1, 2, 3, 4, 5, 6]

function eliminaElemento (arrayDef){
    arrayDef.shift()
return arrayDef;
}
let resultado = eliminaElemento(arrayDef);
console.log(resultado)
