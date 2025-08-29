//Solicitar números y mostrar si están en orden creciente

  let cantidad = parseInt(
    prompt("¿Cuántos números vas a ingresar? (mínimo 2)")
  );

  let anterior = parseInt(prompt("Número 1:"));
  let esCreciente = true;

  for (let i = 2; i <= cantidad; i++) {
    let actual = parseInt(prompt(`Número ${i}:`));

    if (actual <= anterior) {
      esCreciente = false;
    }

    anterior = actual;
  }

  if (esCreciente) {
    alert("Los números están en orden creciente.");
  } else {
    alert("Los números NO están en orden creciente.");
  }
  