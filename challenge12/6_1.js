//Usar if...else para realizar suma, resta, multiplicación o división según la opción elegida.
let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el primer numero"));
let operacion = parseInt (prompt("Ingrese la operacion que desea realizar"));

let multiplicacion = num1*num2
let resta = num1-num2
let división = num1/num2
let suma = num1+num2

if(operacion=== 1){
    alert(`${num1} x ${num2} es: ${multiplicacion}`)
}else if(operacion===2){
    alert(`${num1} - ${num2} es: ${resta}`)
}else if(operacion===3){
    alert(`${num1} / ${num2} es: ${división}`)
}else if(operacion===4){
    alert(`${num1} + ${num2} es: ${suma}`)
} else{
    alert("La opcion ingresada es incorrecta")
}