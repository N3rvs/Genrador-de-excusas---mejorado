'use strict'

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

const getExcusesByArr = arrays => Math.floor(Math.random() * arrays.length);


const displayMessage = (sujetoIndex,accionIndex,cuandoIndex) => {
return (quien[sujetoIndex] + ' ' + queHizo[accionIndex] + ' '  + cuando [cuandoIndex])
};

function excuseGenerator () {
  const sujetoIndex = getExcusesByArr (quien)
  const accionIndex = getExcusesByArr (queHizo)
  const cuandoIndex = getExcusesByArr(cuando)
  const message = displayMessage(sujetoIndex,accionIndex,cuandoIndex)
return message
}

document.querySelector('.buttonOfExcuses').addEventListener ('click',() =>{
document.getElementById("miExcusa").innerHTML = excuseGenerator(); 
})

