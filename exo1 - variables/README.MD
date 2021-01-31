# Les variables Javascript

## Introduction
    Si vous souhaitez en savoir plus avant de vous lancez sur l'exercice, rendez vous sur la section *Cours* du fichier.

## Exercice

    Instanciez la variable *username* avec une chaine de caractère contenant votre prénom.

## Cours

    En Javascript, vous n'avez pas à spécifier le type des variables, il vous suffit d'utiliser un de ces trois mots
clés pour pouvoir créer une variable :

- const => création d'une constante (attention, il est obligatoire d'instancier ce type de variable lors de sa déclaration ex: const name = "toto";)
- var => création d'une variable 
- let => création d'une variable

## Exemples

- Constante

```javascript
const name = "Jean";
name = "toto"; // action impossible car c'est une constante
```
- Let et Var

```javascript
let age = 12;
var prenom = "Sami";
prenom = "Léa"
age = 25;
```

## Portée des variables

La portée des variables dépends de l'endroit ou vous les déclarer.
Créer une variable hors de tous bloc et fonction la rendra globale (accessible de partout)
Cependant il existe une nuance entre le mot clé let et var.

- Let 

Il a une portée de bloc:

```javascript
if(true) {
    let couleur = "rouge";
}
couleur = "vert"; // Impossible car couleur n'est accessible qu'à l'interieur du bloc if
```

- Var

Il a une portée de fonction:

```javascript
function maSuperFonction()
    var couleur = "rouge";
    if(true) {
        couleur = "vert"; // Possible car nous sommmes toujours dans notre fonction
    }
    couleur = "bleu"; // Possible car nous sommmes toujours dans notre fonction
}
couleur = "jaune"; // Impossible car couleur n'est accessible qu'à l'interieur de la fonction
```

En revanche, créer une fonction en dehors de toute fonction lui donnera une portée globale:

```javascript
var maVariableGlobal = "Hello tous le monde";

function maSuperFonction()
    maVariableGlobal = "rouge";
    if(true) {
        maVariableGlobal = "Comment ça va ?"; // Accessible de partout
    }
    maVariableGlobal = "J'adore coder !"; // Accessible de partout
}
maVariableGlobal = "j'apprend le Javascript !"; // Accessible de partout
```

## Documentation

[Liens de la documentation](https://www.w3schools.com/JSREF/DEFAULT.ASP)