//Solicitar calificaciones una por una, hasta que se ingrese un valor negativo.

let nota;

do{
    nota = parseFloat(prompt("Ingrese la calificacion, (valor negativo para salir)"))
    if( nota > 0 ){
        alert(`Su calificacion ${nota} es mayor a 0`)
    }else if ( nota == 0 ){
        alert(`Su calificacion ${nota} es igual a 0`)
    }
}while(nota >= 0)
alert(`Su calificacion ${nota} es menor a cero`)
