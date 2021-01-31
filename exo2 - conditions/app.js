/**
 * Ne faîtes pas attention à la syntaxe utilisée ici 
 * Ecrivez votre code à l'intérieur de la fonction exo2
 * Vous avez accès à la variale age qui est passé en paramètre
 * Exemple:
 * age = 10;
 * if(age == 55) {...}
 * 
 * Les prochains exercices risquent d'être présenté de la même manière...
 */
function exo2(age) {
    var estMajeur;

    // Ecrivez ici ...
    
    if(age >= 18) {
        estMajeur = true;
    } else {
        estMajeur = false;
    }

    return estMajeur;
}

module.exports = exo2;

