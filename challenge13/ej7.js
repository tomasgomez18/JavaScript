/* Diseñar un algoritmo que calcule el IMC con peso (kg) y altura (m).

Mostrar el resultado con su categoría:

Menos de 18.5 → Peso bajo

Entre 18.5 y 24.99 → Peso normal

25 o más → Sobrepeso

Fórmula:

imc = peso / (altura ** 2); */


let altura = parseFloat(prompt("Ingrese la altura"));
let peso = parseFloat(prompt("Ingrese el peso"));

let imc = peso / (altura ** 2);

if(peso < 18.5){
    alert(`Su peso "${peso}" esta muy bajo. Su indice de masa corporal es: "${imc}"`)
}
else if ( peso >= 18.5 && peso <25 ){
    alert(`Su peso "${peso}" esta en un indice normal. Su indice de masa corporal es: "${imc}"`)
}
else if ( peso >= 25 ){
    alert(`Su peso "${peso}" esta en SOBREPESO. Su indice de masa corporal es: "${imc}"`)
}
else{
    alert('Ingrese un valor valido')
}