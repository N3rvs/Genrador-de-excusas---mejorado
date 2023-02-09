'use strict'

// Arreglos para combinar y hacer el generador de excusas aleatorio 😆

const quien = [
  "El cartero",
  "Mi hermano",
  "Mi abuelo",
  "Una niña",
];
const queHizo = [
  "se llevo sin querer",
  "Me hizo una mala broma y daño",
  "robó",
  "quemo sin culpa",
  "mancho de cafe",
  "mojo con la manguera",
  "se limpio la boca con ",
];
const cuando = [
  "antes de venir a clases 🧑‍🏫",
  "cuando mi padre me llamaba 🥸",
  "cuando estaba desayunando 🥐🥖🥞",
  "mientras estaba preparando la mochila 🎒😶‍🌫️",
];
// Funcion para generar las palabras aleatorias.

const arreglosAleatorios = (arreglos) =>{
  return Math.floor(Math.random() * arreglos.length)
}

// funcion que genera las excusas 😂

const generadorDeExcusas = function (quien, queHizo, cuando) {
  const sujeto = arreglosAleatorios(quien)
  const verbo = arreglosAleatorios(queHizo)
  const accion = arreglosAleatorios (cuando)
return `${quien[sujeto]} ${queHizo[verbo]} mi tarea ${cuando[accion]}`;
};

// Evento  para darle accion al generador de excusas 🛎️

document.querySelector('.play').addEventListener ('click',() =>{
document.getElementById("miExcusa").innerHTML = generadorDeExcusas(quien, queHizo, cuando);;  //id "miExcusa" de la clase "card-litle" para combinar con mi evento 👌
})

