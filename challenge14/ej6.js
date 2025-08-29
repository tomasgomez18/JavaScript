/* Crea una función que reciba un array y una posición, y elimine el elemento con .splice(). */
let entrada = prompt("Ingrese un elemento para agregar.");
let arrayDef = [1, 2, 3, 4, 5, 6];

function eliminarPosicion (arrayDef){
arrayDef.splice(entrada)
return arrayDef;    
}

let resultado = eliminarPosicion (arrayDef);
console.log(eliminarPosicion (arrayDef));
