var boutonSoumettre = document.getElementById("boutonSoumettre");
boutonSoumettre.addEventListener("click", corriger);
valueInitialBoutonSoumettre = boutonSoumettre.value;


var choix1 = document.getElementById("choix1");
var choix2 = document.getElementById("choix2");
var choix3 = document.getElementById("choix3");

choix1.addEventListener("click", textStatusVide);
choix2.addEventListener("click", textStatusVide);
choix3.addEventListener("click", textStatusVide);

function textStatusVide() {
    textStatus.innerHTML = "";
}


var textStatus = document.getElementById("textStatus");


var bonneReponseIndex = 0;
var bonneReponseArray = [
    2, 
    3,
    1,
    1,
    2,
    3,
    2, 
    2,
    2,
    3
];

function corriger() {
    if (choix1.checked == true) {
        if (bonneReponseArray[bonneReponseIndex] == 1) {
            bonneReponse();
        } else {
            erreur();
        }
    }
    else if (choix2.checked == true) {
        if (bonneReponseArray[bonneReponseIndex] == 2) {
            bonneReponse();
        } else {
            erreur();
        }
    }
    else if (choix3.checked == true) {
        if (bonneReponseArray[bonneReponseIndex] == 3) {
            bonneReponse();
        } else {
            erreur();
        }
    }

    else {
        textStatus.innerHTML = "vous n'avez pas entrez de réponse";
        textStatus.style.color = "wheat";
    }
}

function erreur() {
    textStatus.innerHTML = "erreur";
    textStatus.style.color = "red";
    boutonSoumettre.value = valueInitialBoutonSoumettre;
}
function bonneReponse() {
    textStatus.innerHTML = "bonne réponse";
    textStatus.style.color = "green";
    boutonSoumettre.value = "continuer";
    boutonSoumettre.removeEventListener("click", corriger);
    boutonSoumettre.addEventListener("click", continuer);   
}


var probleme = [
    document.getElementById("probleme1"),
    document.getElementById("probleme2"),
    document.getElementById("probleme3"),
    document.getElementById("probleme4"),
    document.getElementById("probleme5"),
    document.getElementById("probleme6"), 
    document.getElementById("probleme7"),
    document.getElementById("probleme8"),
    document.getElementById("probleme9"),
    document.getElementById("probleme10")
];

var indexProbleme = 0;
document.getElementById("max").innerHTML = probleme.length;
var problemeIndexDom = document.getElementById("problemeIndex");
continuer(true);
function continuer(premiereFois = false) {
    textStatus.innerHTML = "";
    if (premiereFois == true) {
        probleme[0].style.display = "block";
        for(i = 1; i < probleme.length; i++) {
            probleme[i].style.display = "none";
        }

        choix1.checked = false;
        choix2.checked = false;
        choix3.checked = false;

        return null;
    }
    probleme[indexProbleme].style.display = "none";
    indexProbleme++;
    if (probleme[indexProbleme] == null) {
        document.getElementById("problemeNumero").style.color = "green";
        textStatus.innerHTML = "Vous avez fait tous les problèmes";
        textStatus.style.color = "green";
        document.getElementById("form").style.display = "none";
        return null
    }
    bonneReponseIndex++;
    probleme[indexProbleme].style.display = "block";

    problemeIndexDom.innerHTML = indexProbleme + 1;

    boutonSoumettre.removeEventListener("click", continuer);
    boutonSoumettre.addEventListener("click", corriger);
    boutonSoumettre.value = valueInitialBoutonSoumettre;
    
    choix1.checked = false;
    choix2.checked = false;
    choix3.checked = false;
}