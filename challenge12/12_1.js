// Solicitar nombre de usuario y rol. Permitir o denegar acceso dependiendo si es "admin", "editor" o "invitado".

let nombre = prompt("Ingrese su nombre");
let rol = parseInt(prompt("ingrese 1: admin 2:editor 3:invitado"));

if(rol===1){
    alert(`Hola ${nombre}, usted es admin, acceso permitido`);
}else if(rol===2){
    alert(`Hola ${nombre}, usted es editor, solo tiene acceso a la seccion de edicion`);
}else if(rol===3){
    alert(`Hola ${nombre}, Usted es invitado, no tiene acceso permitido`);
}else{
    alert(`Hola ${nombre}, Ingrese nuevamente una opcion valida`);
}
