const cambiarTitulo = () => {
    //Generamos una funcion y verificamos por consola//
    console.log("Desde la funcion cambiar titulo");
    const  titulo  = document.getElementById("titulo-modificable");
    console.log(titulo);
    }
    //modificar el color del titulo     
    titulo.classList.add("text-info");


    //titulo.className = 'text.warning';

//modifica el texto iyectando, esta etiqueta no es de usso habitual por su vulnerabilidad
    //titulo.innerHTML = 'hola <b>mundo</b>';

 /*    titulo.textContent ='hola <b>mundo</b>';
} */