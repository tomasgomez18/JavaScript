// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadena = "";
do {
  let texto = prompt("Ingrese una cadena de texto").toLowerCase();
  if (cadena == "") {
    cadena = texto;
  } else {
    cadena += "" + texto;
  }
  let confirmacion = confirm("Quiere seguir ingresando");

  if (!confirmacion) {
    break;
  }
} while (true);
alert(`textos concatenados + ${cadena}`)
    