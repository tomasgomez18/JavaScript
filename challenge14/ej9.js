/* Crea una función que devuelva un número aleatorio entre 1 y 10 usando Math.random() y Math.floor() */


function numRandom (){
    
    for ( let i = 0 ; i <= 10 ; i++ ){
        
        let random =  Math.floor(Math.random()*10);
        return random;
    }

}
let resultado = numRandom();
console.log(numRandom());