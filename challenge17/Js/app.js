
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


            let iconos = document.createElement('div');
            iconos.classList.add('iconos');
            let eliminar = document.createElement('i');
            eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
            eliminar.addEventListener('click', function() {
                tareaNueva.remove(); 
            });

            iconos.appendChild(eliminar);
            tareaNueva.appendChild(iconos);
        }
    }
    //llamo a la funcion en el boton para que al hacer click se ejecute la funcion
    boton.addEventListener('click', agregarTarea);