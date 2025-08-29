// Según color ingresado ("rojo", "amarillo", "verde"), mostrar acción correspondiente: detenerse, precaución o avanzar

let color  = parseInt(prompt("Ingrese un 1:Verde, 2:Rojo o 3:Amarillo"));

if(color===1){
    alert("Avanzar")
}else if(color===2){
    alert("Precuacion")
}else if(color===3){
    alert("Detenerse")
}else{
    alert("Ingrese una opcion valida")
}