// Verificar si una contraseña tiene al menos 8 caracteres, incluye mayúsculas, números y símbolos.

let clave = prompt("Ingrese una clave de al menos 8 caracteres");
let cantidad = clave.length;


if (clave.length >= 8) {
  alert(`¡Clave aceptada!, tiene ${cantidad} caracteres`);
} else {
  alert(`La clave es demasiado corta, tiene ${cantidad} caracteres`);
}
