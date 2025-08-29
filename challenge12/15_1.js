// Generar un número aleatorio entre 1 y 10, y verificar si el número ingresado por el usuario es mayor, menor o igual.
let num = parseInt(prompt("Ingrese un numero del 1 al 10"))
let aleatorio = Math.floor(Math.random ()* 10)
 if(num>aleatorio){
    alert(`El numero ${num} es mayor que ${aleatorio}`)
 }else if(num<aleatorio){
    alert(`El numero ${num} es menor que ${aleatorio}`) 
 }else if(num==aleatorio){
    alert(`El numero ${num} es igual a ${aleatorio}`)
 }else{
    alert("opcion invalida")
 }