/* Contar caracteres de un texto:
Crea una función que reciba un texto y muestre cuántos caracteres tiene usando */

let entrada = prompt("Ingrese un texto").toLowerCase();

function texto (entrada){
     return entrada.length;
}
document.writeln(`El texto "${entrada}" tiene ${entrada.length} caracteres`);
