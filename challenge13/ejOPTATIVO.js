// Diseñar un algoritmo que obtenga el mes y día de nacimiento y muestre el signo zodiacal.

let signos = [ 'capricornio', 'acuario', 'pisis', 'aries', 'tauro', 'geminis', 'cancer', 'leo', 'virgo', 'libra', 'escorpio', 'sagitario', 'capricornio'];
let diasCambio = [20, 19, 20, 20, 21, 21, 23, 23, 23, 22, 21];

let dia = parseInt(prompt("Ingrese el dia"));
let mes = parseInt(prompt("Ingrese el mes")) -1;

let signo = "";

if (dia <= diasCambio[mes]){
    signo = signos [mes]

} else{
    signo = signos[mes+1]
}
alert("Tu signo zodiacal es: " + signo)