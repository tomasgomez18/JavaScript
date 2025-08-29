/* Crea una función que reciba un array de números y devuelva el mayor de ellos. */


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20,122,546,123, 3253,124,1241]

function numMayor(array){

    return Math.max(...array);  //  ... convierte el array en una lista de valores separados

}
let resultado = numMayor(array);
console.log (resultado);