// Si el monto de la compra supera $100, aplicar un 10% de descuento

let monto = parseInt(prompt("Ingrese el monto de la compra"))

descuento = monto -(monto*0.10)

if(monto>100){
    alert(`Su cuenta tiene un 10% de descuento, su total es ${descuento}`)
}else{
    alert(`su cuenta no supera el monto, no obtiene descuento, su total es ${monto}`)
}