/* Realiza un script que pida un texto y lo muestre en mayúsculas. */

let texto;

while(texto=prompt("Ingrese un texto, presione cancelar para salir")){

    document.writeln("el texto es:" + texto.toUpperCase())

}