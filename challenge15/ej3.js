

const tareas =
[ { id: 1, descripcion: "Hacer ejercicio", completada: true, prioridad: "alta" }, 
{ id: 2, descripcion: "Estudiar JavaScript", completada: false, prioridad: "alta" }, 
{ id: 3, descripcion: "Comprar víveres", completada: false, prioridad: "media" }, 
{ id: 4, descripcion: "Llamar al médico", completada: true, prioridad: "baja" }, 
{ id: 5, descripcion: "Limpiar la casa", completada: false, prioridad: "media" } ]


//Mostrar las tareas que están pendientes (no completadas)


const tarea = tareas.filter(items => items.completada ===false)
console.log(tarea);


//Crear un array solo con las descripciones de las tareas

const descripcionTareas = tareas.map(tarea => tarea.descripcion);
console.log(descripcionTareas);


//Filtrar las tareas de alta prioridad que no están completadas

const tareasAltaPrioridad = tareas.filter (tarea => tarea.prioridad === 'alta')
console.log(tareasAltaPrioridad);


//Encontrar la tarea que contiene "JavaScript" en su descripción

const palabra = tareas.find(tarea=> tarea.descripcion.includes("JavaScript"))
console.log(palabra);   

