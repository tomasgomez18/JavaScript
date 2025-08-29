/* Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 



Input:  40773821 
Output: ‘L’
 */
do{
    dni = parseInt(prompt("Ingrese su numero de dni"))

    if (isNaN(dni) || dni > 99999999 || dni < 0 ){
        alert("Ingrese un valor valido")
    }
    else {
        let resto = dni % 23


        let letras = "";


        switch (resto) {
            case 0: letras = 'T'
                break;
        
            case 1: letras = 'R'
                break;
        
            case 2: letras = 'W'
                break;
        
            case 3: letras = 'A'
                break;
        
            case 4: letras = 'G'
                break;
        
            case 5:  letras ='M'
                break;
        
            case 6: letras = 'Y'
                break;
        
            case 7: letras = 'F'
                break;
        
            case 8: letras = 'P'
                break;
        
            case 9: letras =  'D'
                break;
        
            case 10:  letras = 'X'
                break;
        
            case 11: letras = 'N'
                break;
        
            case 12: letras = 'J'
                break;
        
            case 13: letras = 'Z'
                break;
        
            case 14: letras = 'S'
                break;
        
            case 15: letras = 'Q'
                break;
        
            case 16: letras = 'V'
                break;
        
            case 17: letras = 'H'
                break;
        
            case 18: letras = 'L'
                break;
            
            case 19: letras = 'C'
                break;
        
            case 20: letras = 'K'
                break;
        
            case 21: letras = 'K'
                break;
        
            case 22: letras = 'E'
                break;
        
        }

        alert(`La letra del dni ${dni} es: ${letras}`)

    }
    let respuesta = confirm ("Seleccionar Calcelar para salir ")
    if(!respuesta){
        break;
    }
}while(true);
