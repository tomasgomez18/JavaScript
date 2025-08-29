// Comprobar si una fecha (día, mes, año) ingresada por el usuario es válida

let dia = parseInt(prompt("Ingrese un dia"))
let mes = parseInt(prompt("Ingrese un mes"))
let año = parseInt(prompt("Ingrese una año"))

if(dia===mes && dia===año && mes===dia && mes===año && año===dia&&año===mes){
    alert("La fecha es valida")
}else{
    alert("La fecha no es valida")
}