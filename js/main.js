/*********************************************************************************
 *
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu.
 *
 *********************************************************************************/

// lancerJeu()

let inputEcriture = document.getElementById("inputEcriture");
console.log(inputEcriture);
let boutonValider = document.getElementById("btnValiderMot");
console.log(boutonValider);

let zoneProposition = document.querySelector(".zoneProposition");
console.log(zoneProposition);
let zoneScore = document.querySelector(".zoneScore span");
console.log(zoneScore);

let listeInputRadio = document.querySelectorAll(".optionSource input");
console.log(listeInputRadio);
