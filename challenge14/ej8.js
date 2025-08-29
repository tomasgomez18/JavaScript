/* Crea una función que reciba un array y devuelva una parte usando .slice(). */

let entrada = prompt("Ingrese el inicio y el fin separado por comas. ej (0, 3)");
let array = ['tomas', 4, 5, 65, 'vaca'];
let recorte;

function arrayParte(array, inicio, fin) {
    if (inicio >= 0 && fin <= array.length && inicio < fin) {
        recorte = array.slice(inicio, fin);
        return recorte;
    } else {
        alert('Caracter inválido');
        return null; 
    }
}

let resultado = null;

if (entrada !== null && entrada.includes(',')) {
    let entradaConComa = entrada.split(',');
    let inicio = parseInt(entradaConComa[0]);
    let fin = parseInt(entradaConComa[1]);

    if (!isNaN(inicio) && !isNaN(fin)) {
        resultado = arrayParte(array, inicio, fin);
    } else {
        alert('Debe ingresar números válidos.');
    }
} else {
    alert('Entrada inválida. Use el formato: 0,3');
}

if (resultado !== null) {
    alert(`El resultado del array recortado es: ${resultado}`);
}