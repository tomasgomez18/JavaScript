// Dado un número, mostrar si es un niño, adolescente, adulto o adulto mayor
let num = parseInt(prompt("Ingrese una edad"));

if(num>0 && num<=10){
    alert("La edad es de un niño")
} else if(num>10 && num<=17){
    alert("La edad es de un adolescente")
}else if(num>=18 && num<=30){
    alert("La edad es de un adulto")
}else{
    alert("la edad es de un adulto mayor")
}