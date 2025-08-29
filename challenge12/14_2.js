// Mostrar un mensaje de confirmación y repetir mientras el usuario diga “no”

let mensaje;

do{
    mensaje = parseInt(prompt("Ingrese 1:si 2:No"));
 }while(mensaje === 1)
    alert("Accion confirmada")