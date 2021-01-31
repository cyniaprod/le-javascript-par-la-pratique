# Les instruction Javascript

## Introduction
    Si vous souhaitez en savoir plus avant de vous lancez sur l'exercice, rendez vous sur la section *Cours* du fichier.

## Exercice

    Complétez la fonction ex02 en modifiant la valeur de la variable *estMajeur* en fonction de la valeur de la variable âge.

## Cours

    Les conditions sont des instruction très utiles qui vous permettent de pouvoir traiter plusieurs cas dans votre programme et donc d'écrire des algorithme.


## Syntaxe

- if (si en français)

```javascript
if( *votre_condition* ) {
    // Le code à executer si la condition est respectée.
}
```

- else if (sinon si en français) 
```javascript
if( *votre_condition* ) {
    // Le code à executer si la condition est respectée.
} else if ( *autre_condition* ){
    // Le code à executer si la PREMIERE CONDITION n'est pas respectée et que la deuxième l'est.
}
```

- else (sinon en français) 
```javascript
if( *votre_condition* ) {
    // Le code à executer si la condition est respectée.
} else if ( *autre_condition* ){
    // Le code à executer si la PREMIERE CONDITION n'est pas respectée et que la deuxième l'est.
} else {
    // Le code à executer si toutes les autres conditions ne sont pas respectée !
}
```

## Exemple

- Constante

```javascript
const jeton = 10;
if(jeton <= 0) {
    console.log("Vous n'avez plus de jeton..."); // Permet d'afficher un message
} else {
    console.log("Vous avez encore des jetons...");
}
```

## Les opérateurs conditionnelles

Pour pouvoir écrire des conditions, il vous faut utiliser des opérateurs:
- < : strictement inférieur...
- > : strictement supérieur...
- <= : inférieur ou égale à...
- >= : supéreirur ou égale à...
- == : égale à...
- === : égale et de même type que...
- != : non égale à...
- !== : non égale et pas de même type que...

Il est aussi possible de combiner les conditions dans un if ou un else if avec les symboles suivants:
- && : ET
- || : OU


## Exemples

- Exemple 1 
```javascript
let joueur1 = "Toad";
let joueur2 = "Mario";

if( joueur1 === joueur2) {
    console.log("Les deux joueurs sont identiques!");
} else {
    console.log("Les deux joueurs sont différent");
}
```

- Exemple 2 
```javascript
let nom = "Toad";
let score = 1300;

if( nom === "Toad" && score >= 1000 ) {
    console.log("Toad a remporté 1300 points !");
}
```

## Documentation
Pour plus d'info, consultez la [documentation officiel] de Javascript(https://www.w3schools.com/JSREF/DEFAULT.ASP)