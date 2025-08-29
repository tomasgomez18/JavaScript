/*  Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
1234
 */

let num = parseInt(prompt("Ingrese un numero del 1 al 50"))

if (num<=50){
    
    for ( let i = 1 ; i <=num ; i++ ){
    let linea = "";
    
    for ( let k = 1 ; k<= i ; k++){
        linea += i ;

    }
       document.writeln( linea + "<br>") ; 
}
 
}
else{
    alert("El numero tiene que ser menor a 50")
}