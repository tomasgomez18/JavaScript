// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


let numero;
let suma = 0;

do{
    numero = parseFloat(prompt("Ingrese su numero"));
    suma += numero 
}while(confirm("Quiere seguir ingresando"));
alert(`el total de los numeros ingresados es ${suma}`)