//El programa genera un número aleatorio (entre 1 y 10) y el usuario debe adivinarlo

let num = parseInt(prompt("Ingrese el numero que desea adivinar"));
let numRandom = Math.floor(Math.random ()*10 +1)
let numero = true
while(numero){
    if(num===numRandom){
        alert(`el numero random es ${numRandom} es igual a ${num}`)
        numero = false;
    }else{
        alert(`el numero ingresado ${num} no es igual a ${numRandom}`)
            num =  parseInt(prompt("Ingrese el numero que desea adivinar"));
    }
}