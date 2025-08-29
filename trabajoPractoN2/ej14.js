/* Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”. */

let entrada = prompt("Ingrese una frase").toLowerCase();
let = texto = "";

for ( let i = 0 ; i < entrada.length ; i++){
    let letra = entrada.charAt(i)  //Separa las frases en letra por letra (charat(i))
    texto += letra + "-";  // lleno la variable TEXTO con las letras de la frase que hay en entrada.charat(i) y concatena un "-"
    
}
document.writeln(texto);