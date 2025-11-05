// JS
const incrementar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const reiniciar = document.getElementById('reiniciar');
const contador = document.getElementById('contador');

let valorContador = 0;

function actualizarContador() {
  contador.textContent = valorContador;
}

function incrementarContador() {
  valorContador++;
  actualizarContador();
}

function restarContador() {
  valorContador--;
  actualizarContador();
}

function reiniciarContador() {
  valorContador = 0;
  actualizarContador();
}

incrementar.addEventListener('click', incrementarContador);
restar.addEventListener('click', restarContador);
reiniciar.addEventListener('click', reiniciarContador); 