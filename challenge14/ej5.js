/* Crea una función que reciba un texto y lo devuelva invertido usando un while y .substring() o .charAt(). */

let entradaTexto = prompt("Ingrese un texto");
let textoInvertido = "";
function invertido (entradaTexto){
    let i = entradaTexto.length -1;
    while( i >= 0 ){
        textoInvertido += entradaTexto.charAt(i);
        i --;
    }
    return textoInvertido;
}

 document.writeln(`el texto invertido de ${entradaTexto} es: ${invertido (entradaTexto)}`);