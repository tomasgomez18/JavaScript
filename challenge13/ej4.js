//Mostrar la estación correspondiente dependiendo del valor de la variable mes (Primavera, Otoño, Verano, Invierno).


let mes; 

do {
    mes = prompt("Ingrese el numero del mes y el programa te dira en que estacion te encontras (1 al 12)");
    if ( mes === null || isNaN(mes)){

        alert("Ingrese un numero. Caracter invalido.")
    }
        
else if (mes ==12 || mes ==1 || mes == 2){
    alert("Verano")
}
else if (mes == 3 || mes == 4 || mes == 5){
    alert("Otoño")
}
else if (mes == 6 || mes == 7 || mes == 8){
    alert("Invierno")
}
else if (mes == 9 || mes == 10 || mes == 11){
    alert("Primavera")
} 
}
while (mes<1 || mes >12)

