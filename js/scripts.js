/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

function afficherResultat(score, nombreTotalDeProposition) {
  // Récupération de la zone dans laquelle on va écrire le score
  let zoneScore = document.querySelector(".zoneScore span")
  // Ecriture du texte
  let scoreAAfficher = `${score} / ${nombreTotalDeProposition}`
  // On place le texte à l'intérieur du span.
  zoneScore.innerText = scoreAAfficher
}

function afficherProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition")
  zoneProposition.innerText = proposition
}
/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {

  let score = 0
  let index = 0
  let listeProposition = [...listeMots]

  let btnValiderMot = document.getElementById("btnValiderMot")
  let inputEcriture = document.getElementById("inputEcriture");

  btnValiderMot.addEventListener("click", () => {
    console.log(inputEcriture.value)
    if (inputEcriture.value === listeProposition[index]) {
      score++
    }
    index++
    afficherResultat(score, index)
    // on réinitialise le champs de saisie
    inputEcriture.value = ''
    if(listeProposition[index] === undefined) {
      afficherProposition("Le jeu est fini")
      btnValiderMot.disable = true
    } else {
      afficherProposition(listeProposition[index])
    }
  })

  let listeBtnRadio = document.querySelectorAll(".optionSource input")
  for (let i = 0; i < listeBtnRadio.length; i++) {
      listeBtnRadio[i].addEventListener("change", (event) => {
        console.log(event.target.value)
        if(event.target.value === "1") {
          listeProposition = [...listeMots]
        } else{
          listeProposition = [...listePhrases]
        }
        afficherProposition(listeProposition[i])
      })
  }

  afficherResultat(score, listeProposition.length)
}
