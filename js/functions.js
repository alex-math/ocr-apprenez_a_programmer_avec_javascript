function choisirPhrasesOuMots() {
  let saisieUtilisateur = prompt("Voulez-vous saisir un MOT ou une PHRASE ?")
  while(saisieUtilisateur !== "MOT" && saisieUtilisateur !== "PHRASE") {
    saisieUtilisateur = prompt("Voulez-vous saisir un MOT ou une PHRASE ?")
  }
  return saisieUtilisateur
}

function lancerBoucleDeJeu(choixListeUtilisateur) {
  let score = 0
  for (let i=0; i<choixListeUtilisateur.length; i++) {
    let saisieUtilisateur = prompt(choixListeUtilisateur[i])
    console.log(saisieUtilisateur)
    if (saisieUtilisateur === choixListeUtilisateur[i]) {
      console.log("Bravo !")
      score++
    }
  }
  return score
}

function afficherResultat(score, nombreTotalDeProposition) {
  console.log("Votre score est de " + score + " sur " + nombreTotalDeProposition)
}

function lancerJeu() {
  let saisieUtilisateur = choisirPhrasesOuMots()
  let nombreTotalDeProposition = 0
  let score = 0
  let choixListeUtilisateur

  switch(saisieUtilisateur) {
    case "MOT":
      // copie par valeur
      choixListeUtilisateur = [...listeMots]
      break
    case "PHRASE":
      // copie par référence
      choixListeUtilisateur = [...listePhrases]
      break
  }
  score = lancerBoucleDeJeu(choixListeUtilisateur)
  afficherResultat(score, choixListeUtilisateur.length)
}
