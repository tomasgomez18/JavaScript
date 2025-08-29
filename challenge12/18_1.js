// ación de películas ○ Mostrar si un usuario puede ver una película según su edad y clasificación (Ej: +13, +18).

let edad = parseInt(prompt("Ingrese la edad"));
if(edad>=1 && edad<=10){
    alert("Usted solo tiene acceso a las peliculas infantiles");
}else if (edad>=11 && edad<=17){
    alert("Usted tiene permiso para ver peliculas aptas para +13");
}else if (edad>=18){
    alert("Usted es mayor de edad, tiene acceso libre a todas las peliculas");
}else{
    alert("Ingrese nuevamente un opcion");
}