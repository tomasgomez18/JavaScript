// Pedir tres números al usuario y mostrar cuál es el mayor

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese un numero"));
let num3 = parseInt(prompt("Ingrese un numero"));

if(num1>num2 && num1>num3){
    alert(`el ${num1} es mayor`);
}else if (num2>num1 && num2>num3){
    alert(`el ${num2} es mayor`);
}else{
    alert(`El ${num3} es el mayor`);
}