// Pedir una calificación numérica (0-10) y mostrar la nota correspondiente (Aprobado, Reprobado, Excelente).

let calificacion =  parseInt(prompt("Ingrese la calificacion"));
if(calificacion>=4 && calificacion<=6){
    alert(`Su calificacion ${calificacion} esta aprobada`);
} 
else if(calificacion>=7 && calificacion<=10){
    alert(`Su calificacion ${calificacion} es excelente`);
} else{
    alert(`Su calificacion ${calificacion} esta reprobada`);
}
