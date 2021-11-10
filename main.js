// Exercice 4 : Réalisation d'un programme permettant de saisir nom, prénom et age et de pouvoir l'afficher

var readline = require("readline-sync"); // On recupere le module que l'on place dans la variable readline


var nom = readline.question("Quel est votre nom ? ")
var prenom = readline.question("Quel est votre prénom ? ")
var age = parseInt(readline.question("Quel est votre age ? ")); // Pour convertir notre chaine de caratère par de l'entier avec parseInt()

var txt = "------------------------------------------------\n"
txt += "-----------------BIENVENUE-----------------------\n"
txt += "-----------------------------------------------\n"

txt += "Votre nom est : " + nom + "\n";
txt += "Votre prénom est : " + prenom + "\n";
txt += "Votre nom est : " + age + "\n";

console.log(txt)

//console.log(nom)
//console.log(prenom)
//console.log(age)