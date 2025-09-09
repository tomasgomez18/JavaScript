

const estudiantes =
[ { id: 1, nombre: "Ana", edad: 20, promedio: 8.5, carrera: "Ingeniería" },
    { id: 2, nombre: "Carlos", edad: 22, promedio: 7.2, carrera: "Medicina" },
    { id: 3, nombre: "Chancho", edad: 2 , promedio: 9.1, carrera: "Ingeniería" },
    { id: 4, nombre: "Luis", edad: 21, promedio: 6.8, carrera: "Derecho" },
    { id: 5, nombre: "Sofía", edad: 20, promedio: 8.9, carrera: "Ingeniería" } ]
    
    
    // Mostrar estudiantes con promedio mayor a 8.0
    const promedio = estudiantes.filter(items => items.promedio >8.0)
    console.log(promedio);
    
    // Crear un array solo con nombres y carreras
    const nombreYcarrera = estudiantes.map(estudiantes => ({nombre: estudiantes.nombre , carrera: estudiantes.carrera}))
    console.log("Estudiantes y carreras" , nombreYcarrera);
    
    // Filtrar estudiantes de Ingeniería mayores de 19 años

    const ingEstudiante = estudiantes.filter(items => items.carrera === 'Ingeniería' && items.edad >19)
    console.log('el alumno es:' , ingEstudiante);
    
    //Encontrar al estudiante con ID 3 

    const alumno = estudiantes.find(items => items.id ===3)
    console.log(alumno);
    
    