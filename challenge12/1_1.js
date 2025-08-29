// Número positivo o negativo. Escribir un programa que determine si un número ingresado por el usuario es positivo, negativo o cero.

let numero = parseInt (prompt("Ingrese un numero"));

if (numero>0){
    alert("El numero es positivo");
}else if(numero==0){
    alert("el numero es 0");
}else{
    alert("El numero es negativo");
}
