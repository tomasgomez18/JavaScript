/* - Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”. */

let entrada = prompt("Ingrese un texto").toLowerCase();
let texto = "";

for ( let i = entrada.length -1; i >= 0  ; i-- ){ // empieza de atras para adelante

    texto += entrada[i]; //[i] arroja la posicion de cada letra
}
document.writeln(texto);
