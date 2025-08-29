/* Realiza un script que genere un número aleatorio entre 1 y 99 */


do{
    let random = Math.floor(Math.random() *99);
    alert( `El numero aleatorio es ${random}`)

    let continuar = confirm ("Desea generar otro numero?")
 
} while(true)