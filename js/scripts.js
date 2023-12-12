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

function validerNom(nom) {
  if (nom.length >=2) {
    return true
  }
  return false
}

function validerEmail (email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (emailRegExp.test(email)) {
    return true
  }
  return false
}

/**
 * Cette fonction construit et affiche l'email.
 * @param {string} nom : nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : score.
 */
function afficherEmail(nom, email, score) {
  let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
  location.href = mailto
}

/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {

  initAddEventListenerPopup()

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

  let form = document.querySelector('form');
  form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();

    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;

    if (validerNom(nom) && validerEmail(email)) {
      let scoreEmail = `${score} / ${index}`
      afficherEmail(nom, email, scoreEmail)
    } else {
      console.log("erreur")
    }


  })

  afficherResultat(score, index)
}
