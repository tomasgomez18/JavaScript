//Solicitar la edad al usuario y repetir mientras no esté en el rango (18–99)
let edad = parseInt(prompt("Ingrese su edad"));
while(edad>=18 && edad<=99){
    alert("Esta dentro del rango de edad")
    edad = parseInt(prompt("Ingrese otra vez su edad"));
}
alert("Edad invalida")
