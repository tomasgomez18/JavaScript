/* Crea una función que reciba un texto y una letra, y cuente cuántas veces aparece usando un for */

let entrada = prompt("Ingrese un texto.");
let entradaLetra = prompt("Ingrese una letra para ver cuantas veces se repite");

function  texto (entrada , entradaLetra){

    let contador = 0;
    
    for ( let i = 0 ; i < entrada.length ; i++ ){
        
        if ( entradaLetra === entrada [i]) {
            contador ++;
        }
    }
    return contador;
}
let resultado = texto (entrada , entradaLetra)
document.writeln(`La palabra ${entradaLetra} en el texto ${entrada} se repite ${resultado}`)
