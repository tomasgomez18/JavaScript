// Calcular el impuesto a pagar según rangos de ingreso (ej. menos de R$1.000, entre R$1.000 y R$5.000, más de R$5.000)

let ingreso = parseInt(prompt("Ingrese el monto"));

impuesto1 = ingreso -(ingreso*0.10);
impuesto2 = ingreso -(ingreso*0.20);

if(ingreso<=1000){
    alert(`Su ingreso de $${ingreso} no tiene incremento de impuesto`);
} 
else if (ingreso>=1000 && ingreso<=5000){
    alert(`Su ingreso de ${ingreso} tiene una retencion del 10%, el total es: $${impuesto1} `);
}else if(ingreso>5000){
    alert(`Su ingreso de $${ingreso} tiene una retencion del 20%, el total es: $${impuesto2}`);
}else{
    alert("Ingrese una opcion valida");
}