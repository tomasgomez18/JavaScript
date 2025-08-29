// Pedir al usuario una palabra y contar cuántas vocales contiene.

let palabra = prompt("Ingrese una frase").toLocaleLowerCase()
let vocales = 0

for( let i = 0 ; i < palabra.length ; i++ ){
    let letras = palabra.charAt(i)
    if("aeiou".includes(letras)){
        vocales++
    }
}
alert(`la cantidad de volcales son ${vocales}`)