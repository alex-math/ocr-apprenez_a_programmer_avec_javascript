let score =0
let saisieUtilisateur = prompt("Voulez-vous saisir un MOT ou une PHRASE ?")
let choixListeUtilisateur

while(saisieUtilisateur !== "MOT" && saisieUtilisateur !== "PHRASE") {
  saisieUtilisateur = prompt("Voulez-vous saisir un MOT ou une PHRASE ?")
}

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

for (i=0; i<choixListeUtilisateur.length; i++) {
  let saisieUtilisateur = prompt(choixListeUtilisateur[i])
  console.log(saisieUtilisateur)

  if (saisieUtilisateur === choixListeUtilisateur[i]) {
    console.log("Bravo !")
    score++
  }
}

console.log(score)
