/* Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */

let fila = parseInt(prompt("Ingrese el numero de filas"));
let columnas = parseInt(prompt("Ingrese el numero de columnas"));
let matriz = fila * columnas;                                             // Matriz es es la diametro de la matriz


if ( fila <= 0 || columnas <= 0 || isNaN(fila) || isNaN(columnas) ) {
    alert("Ingrese valores mayores a 0")
}
else {
for ( let i = 1 ; i <=fila ; i++ ){

     for( let k = 1 ; k <= columnas ; k++ ){
        matriz -- ;    
        console.log("\n" + matriz + "<br>")                             // hace el resultado de manera decreciente
        }  
    }

}




