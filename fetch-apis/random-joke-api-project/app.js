// Tu códgigo aquí
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

// Cuando haga click en el botón el usuario, vamos a consumiar la API de chuck norris

// Nos vamos a comunicar con una máquina que no somos nosotros. Necesitamos una forma de poder pedir un recurso a una máquina externa y esperar la respuesta.

// Especificar que esta función debe trabajar con código asíncrono
// Eso lo conseguimos mediante la palabra reservada "async"
button.addEventListener("click", async function() {
    // 1. Tenemos que hacer una peticion GET a la URL de donde queremos el recuerso
    // GET https://api.chucknorris.io/jokes/random

    // Yo le puedo pedir un chiste a la máquina api.chucknorris.io pero no sé cuanto tiempo va a tardar. Dicho de otro modo, yo no puedo continuar mi ejecución del programa hasta que no obtenga esta información 
    // Necesitamos utilizar una palabra reservada llamada "await" para esperar esta respuesta de la otra máquina 

    const response = await fetch("https://api.chucknorris.io/jokes/random");

    // 2. Tengo que transformar los datos que me vienen a una estructura válida de JAvaScript
    // Tengo que transformar el JSON a un tipo de dato JavaScript con el que pueda trabajar

    const data = await response.json();

    console.log(data);

    // Acutalizar el DOM con el chiste
    jokeDIV.textContent = data.value; 

});
