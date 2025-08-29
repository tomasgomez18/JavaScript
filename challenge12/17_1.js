//  Solicitar distancia en km y calcular el precio de envío según tramos de distancia.

let distancia = parseFloat(prompt("Ingrese la distancia que desee calcualar en km"));

let tarifaBase = 100
let tramo1 =  distancia + (distancia*tarifaBase)
let tramo2 = distancia + (distancia +(tarifaBase *tarifaBase))
let tramo3 =  distancia + (distancia +(tarifaBase *tarifaBase*tarifaBase))

if(distancia > 0 && distancia <= 100){
    alert(`La distancia ${distancia} tiene un precio de: $${tramo1}`)
}else if (distancia > 100 && distancia <= 300){
    alert(`La distancia ${distancia} tiene un precio de: $${tramo2}`)
} else if (distancia > 300){
    alert(`La distancia ${distancia} tiene un precio de: $${tramo3}`)
}else if(distancia===0){
    alert(`La distancia ${distancia} no puede ser 0. ingrese nuevamente la distancia`)
}else{
    alert("error, reintente nuevamente")
}