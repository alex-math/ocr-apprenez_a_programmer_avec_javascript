<h1 align="center">Cours OpenClassrooms <a href="https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript" target="_blank">Apprenez à programmer avec JavaScript</a></h1>


## Objectifs du cours

- manipuler des données avec JavaScript ;
- écrire un fichier JavaScript ;
- faire interagir JavaScript avec votre page web ;
- créer un formulaire de saisie de données.

## Pour aller plus loin
Je souhaite permettre aux utilisateurs de tester leur vitesse de frappe au clavier, comme peut le proposer le site <a href="https://www.ratatype.fr/typing-test/" target="_blank">ratatype.fr</a>.</br>
L'utilisateur devra sélectionner un temps (30 sec / 1 min / 2 min) puis taper le maximum de mot durant ce temps.

A l'issu du temps imparti, on bascule sur un nouvel écran : le leaderboard.</br>
L'utilisateur pourra voir le nombre de mots saisis par minute.</br>
L'écran de leaderboard possèdera un bouton de rejeu.</br>
Par la suite, l'utilisateur pourra voir le nombre de mots pour lequel il a fait des fautes : une faute correspondrait à un mot qui ne serait pas saisi lettre après lettre jusqu'à la fin, donc sans backspace et surtout sans caractères étrangers au mot.

Le texte sera, au début, une constante dans le code.
Par la suite, il pourra être généré par une IA (ChatGPT d'OpenAI par exemple) pour me permettre de mettre en place un appel API

### Suivi de la saisie
L'utilisateur pourra controler sa saisie dans la zone de saisie en voyant les lettres saisies changer de couleur.</br>
Le curseur de la zone de saisie ne pourra pas bouger (ni avancer, ni reculer) tant que la lettre saisie ne corresponde pas à la lettre attendue.</br>
Lorsque la lettre saisie ne correspond pas, aucune lettre n'est ajoutée à la zone de saisie, et la lettre attendue clignote en rouge.</br>
Lorsque la lettre saisie correspond, la lettre est colorée en vert

### Leaderboard
L'écran Leaderboard affichera un tableau récapitulatif des différents essais de l'utilisateur, classés par ordre croissant de mots saisis par minute.</br>
Par la suite, le leaderboard pourra afficher la précision en % : proportion de lettre saisie correctement par rapport au nombre total de lettre saisie (incluant par conséquent le fautes de frappes).
Il pourra également y avoir un bouton "tips"