//Usar un switch para imprimir un saludo diferente según el idioma (mínimo 7 idiomas).

let idioma;
let idiomaValido = false;

do {
    idioma = prompt("Elige un idioma: ingles, espanol (sin ñ), frances, italiano, chino, portugues o koreano.").toLowerCase();

    if (idioma === 'espanol') {
        alert("Hola, como estas!!!");
        idiomaValido = true;
    } else if (idioma === 'ingles') {
        alert("Hi, how are you?");
        idiomaValido = true;
    } else if (idioma === 'frances') {
        alert("Bonjour, comment ça va ?");
        idiomaValido = true;
    } else if (idioma === 'italiano') {
        alert("Ciao, come stai?");
        idiomaValido = true;
    } else if (idioma === 'chino') {
        alert("你好，你好吗");
        idiomaValido = true;
    } else if (idioma === 'portugues') {
        alert("Oi, como você está");
        idiomaValido = true;
    } else if (idioma === 'koreano') {
        alert("안녕, 잘 지내?");
        idiomaValido = true;
    } else {
        alert("Idioma no reconocido. Por favor, intenta nuevamente.");
    }

} while (!idiomaValido);