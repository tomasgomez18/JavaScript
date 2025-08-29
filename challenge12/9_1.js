// Solicitar nombre de usuario y contraseña. Verificar si ambos coinciden con valores predefinidos.
let usuario = prompt("Ingrese un nombre de usuario")
let clave = prompt("Ingrese una clave") 
let usuario1 ="tomas"
let clave1= "tomas123"

if (usuario === usuario1 && clave === clave1){
  alert(`Bienvenido ${usuario}`);
}else if (usuario !== usuario1 && clave === clave1){
  alert("Nombre de usuario incorrecto");
}else if (usuario === usuario1 && clave !== clave1){
  alert("Contraseña incorrecta");
}else{
  alert("El usuario o la contraseña no son correctos");
}
