'use strict'

let quien = [
  "El cartero",
  "Mi hermnao",
  "Un amigo",
  "Mi abuelo",
  "Una niña",
];
let queHizo = [
  "se llevo sin querer",
  "Me hizo una mala broma y daño",
  "robó",
  "quemo sin culpa",
  "mancho de cafe",
  "mojo con la manguera",
  "se limpio la boca con ",
];
let cuando = [
  "antes de venir a clases 🧑‍🏫",
  "cuando mi padre me llamaba 🥸",
  "cuando estaba desayunando 🥐🥖🥞",
  "mientras estaba preparando la mochila 🎒😶‍🌫️",
];

const generadorDeExcusas = function (quien, queHizo, cuando) {
  let sujeto = Math.floor(Math.random() * quien.length);
  let verbo = Math.floor(Math.random() * queHizo.length);
  let accion = Math.floor(Math.random() * cuando.length);
  const resultado = `${quien[sujeto]} ${queHizo[verbo]} mi tarea ${cuando[accion]}`;
return resultado
};

const play = document.querySelector('.play');

play.addEventListener ('click',() =>{
  const miExcusa = document.getElementById("miExcusa");
  miExcusa.innerHTML = generadorDeExcusas(quien, queHizo, cuando);
})

  


