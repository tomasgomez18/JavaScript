//Si se elige °C o °F, convertir entre ambas y verificar si la temperatura es normal, fiebre o hipotermia

let grados = parseInt(prompt("Ingrese 1:°C 2:°F"));
let temp = parseInt(prompt("Ingrese la temperatura solo en numeros"));

f = (temp * 9/5) + 32

if(grados===1 && temp>35 && temp<38){
    alert(`Su temperatura °C${temp} es normal`)
}else if (temp>37 && temp<41){
    alert(`Su temperatura °C${temp} no es normal, tiene fiebre`)
}else if(temp>32 &&temp<36){
alert(`Su temperatura °C ${temp} esta baja, tiene hipotermia `)
}else if(grados===2 && temp>96 && temp<100){
    alert(`su temperatura °F${temp} es normal. no tiene fiebre`)
}else if(temp>100  && temp<=102){
    alert(`su temperatura °F${temp} no es normal, tiene fiebre`)
}else if(temp>90&&tempS<93){
    alert(`Su temperatura °F${temp} no es normal, tiene hipotermia`)
}