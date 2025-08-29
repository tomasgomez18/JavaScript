//Solicitar números y sumarlos hasta que el total sea igual o mayor que 100.
let suma = 0;

while(suma < 100){
    let num1 = parseInt(prompt("Ingrese un número"));
    let num2 = parseInt(prompt("Ingrese otro número"));
    suma += num1 + num2;
    if(suma > 100){
        alert(`${suma} es mayor a 100`);
    } else if(suma === 100){
        alert(`La suma total es exactamente 100`);
    } else {
        alert(`La suma es menor a 100. La suma acumulada es: ${suma}`);
    }
}
