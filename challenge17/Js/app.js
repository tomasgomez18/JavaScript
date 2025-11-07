
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




