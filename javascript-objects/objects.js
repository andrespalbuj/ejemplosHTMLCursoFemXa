/**
 * En este juego vemos que podemos definir las caracteristicas de cada uno de los animales: https://blockly.games/puzzle?lang=es
 * 
 * Los animales tinen
 * 
 * Foto (descripcion)
 * Número de patas
 * Un conjunto de rasgos
 */

let patasCaracol = 0;
let rasgosCaracol = ["Baba", "Caparazón"];
let descripcionCaracol = "Tiene una concha y es tiene un cuerpo gelatinoso.";

// Objeto: es una conjunto de propiedades:valor que almacenan información sobre un concepto, un objeto,animal , etc..

const caracol = {
    descripcion: "Bicho que se mueve por el suelo gracias a su baba",
    patas: 0,
    rasgos: ["Baba", "Caparazón"]
};



// objeto abeja
const abeja = {
    descripcion: "Bicho peludito pequeñito que recolecta polen",
    patas: 6,  // propiedad:valor
    rasgos: ["Miel", "Aguijón"]
}

console.log("Caracol: ", caracol);
console.log("Abeja: ", abeja);

// Operaciones habituales: consultar una propiedad

/* Cuantas patas tiene la abeja ? */
console.log("Patas de una abeja: ", abeja.patas); // -> El operador punto '.' nos permite acceder de manera aislada a una propiedad del objeto

/* Dime los rasgos de la abeja */
console.log("Rasgos abeja: ", abeja.rasgos);

/* Dime el número de rasgos que tiene la abeja */
console.log("Número de rasgos de la abeja: ", abeja.rasgos.length);