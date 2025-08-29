// Solicitar la edad del usuario y mostrar si puede votar

let edad = parseInt(prompt("Ingrese la edad"));

if(edad>=16){
    alert("Su edad es apta para votar");
}else{
    alert("Ud es menor de edad, no puede votar");
}