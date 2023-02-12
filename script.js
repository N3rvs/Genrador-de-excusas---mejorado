'use strict'

// Arreglos para combinar y hacer el generador de excusas aleatorio 😆

const quien = [
  "El cartero",
  "Mi hermano",
  "Mi abuelo",
  "Una niña",
];
const queHizo = [
  "se llevo sin querer mi tarea",
  "Me hizo una mala broma y daño mi tarea",
  "robó mi tarea",
  "quemo sin culpa mi tarea",
  "mancho de cafe mi tarea",
  "mojo con la manguera , mi tarea",
  "se limpio la boca con mi tarea ",
];
const cuando = [
  "antes de venir a clases 🧑‍🏫",
  "cuando mi padre me llamaba 🥸",
  "cuando estaba desayunando 🥐🥖🥞",
  "mientras estaba preparando la mochila 🎒😶‍🌫️",
];

// Funcion para generar las palabras aleatorias.

const getExcusesByArr = arrays => Math.floor(Math.random() * arrays.length);


//funcion mensaje

const displayMessage = (sujetoIndex,accionIndex,cuandoIndex) => {
return (quien[sujetoIndex] + ' ' + queHizo[accionIndex] + ' '  + cuando [cuandoIndex])
};


// funcion que genera las excusas 😂

function excuseGenerator () {
  const sujetoIndex = getExcusesByArr (quien)
  const accionIndex = getExcusesByArr (queHizo)
  const cuandoIndex = getExcusesByArr(cuando)
  const message = displayMessage(sujetoIndex,accionIndex,cuandoIndex)
return message
}


// Evento  para darle accion al generador de excusas 🛎️

document.querySelector('.buttonOfExcuses').addEventListener ('click',() =>{
document.getElementById("miExcusa").innerHTML = excuseGenerator();;  //id "miExcusa" de la clase "card-litle" para combinar con mi evento 👌
})

