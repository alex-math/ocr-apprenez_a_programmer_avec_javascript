/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

function afficherResultat(score, nombreTotalDeProposition) {
  let zoneScore = document.querySelector(".zoneScore span")
  let scoreAAfficher = `${score} / ${nombreTotalDeProposition}`
  zoneScore.innerText = scoreAAfficher
}

function lancerJeu() {

  let baliseZonePropositionSpan = document.querySelector('#zoneProposition span');
  console.log(baliseZonePropositionSpan);

  let score = 0
  let nbMotProposes = 0

  let btnValiderMot = document.getElementById("btnValiderMot")
  let inputEcriture = document.getElementById("inputEcriture");

  btnValiderMot.addEventListener("click", () => {
    console.log(inputEcriture.value)
  })

  afficherResultat(score, nbMotProposes)
}
