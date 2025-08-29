// Solicitar un número y mostrar su tabla del 1 al 10.
let num = parseInt(prompt("Ingrese un numero para mostrar su tabla de multiplicar")); 
let resultado = 0;
let contenedor =""


for(let i = 0 ; i <= 10 ; i++){
    resultado = num * i 
    alert(` ${num} x ${i} es = ${resultado}`);
    contenedor += ' ${num} x ${i} es = ${resultado}\n'
}
alert (`resultado ${contenedor}`)

