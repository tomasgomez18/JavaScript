// Comparar una contraseña ingresada con una contraseña guardada. Mostrar mensaje si coinciden o no.

let contraseñaGuardada = "tomas123"
let contraIngresada = prompt("Ingrese una contraseña");


if(contraIngresada === contraseñaGuardada){
    alert("Su clave es correcta");
}else{
    alert("Su clave es incorrecta, ingrese otra");
}
