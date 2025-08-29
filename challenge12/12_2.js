// Pedir una contraseña al usuario hasta que coincida con la correcta

let claveDef = "tomas123"
let intento;

/* do {
    intento = prompt("Ingresa la clave").toLocaleLowerCase()
    if ( intento !== claveDef ){
        alert("Clave incorrecta, intentar de nuevo")
    }
}while( intento !== claveDef )
    alert("Clave correcta, Bienvenido!")
 */

do {
    intento = prompt("Ingrese una clave").toLowerCase()
    if(intento === claveDef)
        alert("Clave correcta, bienvenido!")
}while(intento === claveDef)
    alert("Clave incorrecta, intentar de nuevo")