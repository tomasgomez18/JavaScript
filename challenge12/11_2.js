// Mostrar opciones al usuario y repetir hasta que elija salir.

let menu = parseInt(prompt("1: Sumar 2: Multiplicar 3: Restar 4:Salir"));

while(menu !==4 ){
    if(menu ==1){
        alert("Opcion sumar")``
    }else if(menu == 2){
        alert("Opcion multiplicar")
    }else if(menu == 3){
        alert("Opcion restar")
    }else{
        alert("Opcion salir")
        prompt("Ingrese una opcion valida");
    }
    menu = parseInt(prompt("1: Sumar 2: Multiplicar 3: Restar 4:Salir"));
}

