/* Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp*/

let edad1 = prompt("Ingrese la primera edad");
let nombre1 = prompt("Ingrese el primer nombre");
let edad2 = prompt("Ingrese las segunda edad");
let nombre2 = prompt("Ingrese el segundo nombre");
let edad3 = prompt("Ingrese ingrese la tercera edad");
let nombre3 = prompt("Ingrese el tercer nombre");

let mayor = Math.max(edad1, edad2, edad3);
let nombreMayor;

if (edad1 == mayor){
    nombreMayor = nombre1
}else if (edad2 == mayor){
    nombreMayor = nombre2
}else {
    nombreMayor = nombre3
}
alert(`el mayor es ${nombreMayor}, tiene ${mayor} años `)