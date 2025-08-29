/* //Crear un array con 5 animales.

Añadir 2 más (uno al inicio y otro al final).

Eliminar el que está en la tercera posición.

Mostrar la cantidad total de animales. */

let animales = ['perro', 'gato', 'caballo', 'pez', 'pajaro']
animales.unshift('vaca')
console.log(animales);
animales.push('tortuga')
console.log(animales);
animales.splice(3,1)
console.log(animales);
console.log(animales.length);
