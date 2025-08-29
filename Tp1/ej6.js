//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let a = parseInt(prompt("Ingrese un numero: "))
let b = parseInt(prompt("Ingrese otro numero: "))

 if (a > b) {
    alert(`El primer numero ingresado es ${a} es mas grande que el segundo ${b}`);
    }
    else if(a=b) {
    alert(`ambos numeros son iguales`);
    }
    else{
    alert(`El segundo numero ingresado es ${b} es mas grande que el primero ${a}`);
    }