'use strict'

// Array para combinar y hacer el generador de excusas aleatorio 😆

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

const random = (palabra) =>{
  return Math.floor(Math.random() * palabra.length)
}

// funcion que genera las excusas 😂

const generadorDeExcusas = function (quien, queHizo, cuando) {
  const sujeto = random(quien)
  const verbo = random(queHizo)
  const accion = random (cuando)
return `${quien[sujeto]} ${queHizo[verbo]} mi tarea ${cuando[accion]}`;
};

// Evento  para darle accion al generador de excusas 🛎️

const play = document.querySelector('.play');
play.addEventListener ('click',() =>{
  const miExcusa = document.getElementById("miExcusa");  //id de mi clase "card-litle" para combinar con mi evento 👌
  miExcusa.innerHTML = generadorDeExcusas(quien, queHizo, cuando);
})



