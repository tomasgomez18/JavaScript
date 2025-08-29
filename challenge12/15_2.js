// Ingresar números y calcular el promedio, repitiendo hasta que el usuario elija finalizar

let num;
let suma = 0;
let contador = 0;

do{
    num = parseFloat(prompt("Ingrese un numero"))
    suma += num 
    contador ++
}while(confirm("Queres ingresar otro numero?"));
if(contador>0){
    let prom = suma / contador
    alert(`El promedio de los ${contador} numeros ingresados es ${prom}`);
}else{
    alert("No se ingresaron numeros validos")
}

