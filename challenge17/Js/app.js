
//Defino una funcion currenTime que se va a ejecutar cada cierto con el setInterval
function currentTime(){
    let date = new Date(); // creo un objeto llamado date con la hora actual 

    //extraigo horas, minutos y segundos del objeto Date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
//agrego un 0 adelante si el numero es menor a 10 
    hh = (hh<10) ? 0 + hh : hh; 
    mm = (mm<10) ? 0 + mm : mm; 
    ss = (ss<10) ? 0 + ss : ss; 

    // creo una variable time donde se va a guardar el formato de la hora
    let time = hh + ":" + mm + ":"  + ss;
    //capturo el id del div para asignarle la hora actual
    let reloj = document.getElementById('reloj');

    //inserto la hora actual de la variable time en el div del reloj 
    reloj.innerHTML = time;
    }
    //ejecuto la funcion currenTime cada 1000 milisegundos con la funcion setInterval
    setInterval(currentTime, 1000);


    //capturo los elementos que voy a necesitar para manipular
    const input = document.getElementById('tareas');
    const boton = document.getElementById('botonTarea');
    const listaDeTareas = document.getElementById('listaTareas');

    //Agrego una funcion para agregar y pregunta si el input no esta vacio
    function agregarTarea (){
        //si el input no esta vacio entonces hace todo el desarrollo
        if (input.value){
            //creo una variable para crear el elimento div que va a ser el contenedor visual 
            let tareaNueva = document.createElement('div');
            //al div que cree le agrego la clase tarea al memomento que se cree
            tareaNueva.classList.add('tarea');
            //creo un elemento p para agregar ahi el valor que tenga el input
            let texto = document.createElement('p');
            //inyecto el contenido que tiene el input a la variable texto 
            texto.innerText = input.value;
            //inserto el elemento p adentro del div contenedor
            tareaNueva.appendChild(texto)
            listaDeTareas.appendChild(tareaNueva);

            //creo un div vacio en donde le agrego la clase iconos
            let iconos = document.createElement('div');
            iconos.classList.add('iconos');

            //creo un elemento i y le agrego la clase del icono para eliminar
           let eliminar = document.createElement('i');
            eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');

            //asocio una funcion al evento click, cuando se ejecuta remueve la tarea que fue creada en primer instancia 
            eliminar.addEventListener('click', function() {
                tareaNueva.remove(); 
            });

            //creo un elemento i y le agrego la clase del lapiz para editar la tarea
            let editar = document.createElement('i');
            editar.classList.add('bi', 'bi-pencil', 'icono-editar');
            //se ejecuta la funcion al hacer un click que va a permitir editar la tarea o el texto creado
            editar.addEventListener('click', editarTarea);
            //inserto los iconos al contenedor
            iconos.append(eliminar, editar);
            //inserto el div.iconos dentro del div.tareaNueva que representa la tarea completada
            tareaNueva.appendChild(iconos);

            
        }

    }
    //creo la funcion tarea que recibe como parameto un evento, se ejecuta cuando el usuario hace click en el boton de editar
    function editarTarea(e) {
        //e.target es el icono clickeado. parentElement sube al contenedor de iconos y el otro parentElement sube al div de la tarea completada
    let tarea = e.target.parentElement.parentElement;
    //busca el primer p dentro de tarea que contiene el texto actual de la tarea y la guarda en textoOriginal
    let textoOriginal = tarea.querySelector('p');
        //crea un campo input para que el usuario pueda editar el texto.
    let inputEditar = document.createElement('input');
        //define el tipo del input, en este caso es de tipo texto
    inputEditar.type = 'text';
        //con el .value entro al valor que contiene el input original, para que el usuario pueda verlo y editarlo
    inputEditar.value = textoOriginal.innerText;
        //reemplaza el p original por el nuevo input dentro del div.tarea
    tarea.replaceChild(inputEditar, textoOriginal);
        //remueve la clase del icono, es decir que comienza el proceso para cambiar el icono en el momento de editar
    e.target.classList.remove('bi-pencil');
        //agrego una clase nueva que es de un icono para guardar los cambios que unicamente se ve cuando estas editando
    e.target.classList.add('bi-save');
        //elimina el evento actual que es el de editar para evitar que de dispare de nuevo mientras se edita
    e.target.removeEventListener('click', editarTarea);
    //agrego un nuevo evento click al icono que ahora ejecuta la funcion de guardar edicion cuando se haga un click en el icono de guardar cambios 
    e.target.addEventListener('click', function guardarEdicion() {
        //obtengo el valor del imput que hay adentro del imput 
        let nuevoTexto = inputEditar.value;
        //creo un elemento p y lo que se vuelva a ingresar se guarda en la variable nuevo texto
        let textoFinal = document.createElement('p');
        textoFinal.innerText = nuevoTexto;
        //reemplazo el input por el nuevo texto editado
        tarea.replaceChild(textoFinal, inputEditar);
        //remueve las clases de guardado y vuelve al icono del principio que es el del lapiz, simplemente removiendo el nombre de las calses
        e.target.classList.remove('bi-save');
        e.target.classList.add('bi-pencil'); 
        //reemplado los eventos de accion en los botones
        e.target.removeEventListener('click', guardarEdicion);
        e.target.addEventListener('click', editarTarea);
    });
}
    //llamo a la funcion en el boton para que al hacer click se ejecute la funcion
    boton.addEventListener('click', agregarTarea);