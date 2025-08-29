/*  Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
Ejemplo:
Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1
 */

/* let entrada = prompt("Ingrese un texto").toLowerCase();
let texto = "";
let posicion = 0;
for ( let i = 0 ; i < entrada.length ; i++ ){
    let palabra = entrada.charAt(i);
    if ('aeiouAEIOU'.includes(palabra) )
        posicion = i;
}
document.writeln(posicion); */
let entrada = prompt("Ingrese un texto").toLowerCase();
let posicion = -1;  

for (let i = 0; i < entrada.length; i++) {
  let letra = entrada.charAt(i);
  if (
    letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'
  ) {
    posicion = i + 1; // posición humana (empezando en 1)
    document.writeln(`La vocal '${letra}' está en la posición ${posicion}`);
    break;
  }
}

if (posicion === -1) {
  document.writeln("No se encontró ninguna vocal.");
}
