var boutonSoumettre = document.getElementById("boutonSoumettre");
boutonSoumettre.addEventListener("click", corriger);
valueInitialBoutonSoumettre = boutonSoumettre.value;


var choix1 = document.getElementById("choix1");
var choix2 = document.getElementById("choix2");
var choix3 = document.getElementById("choix3");
var aucunChoix = document.getElementById("choixAucun");

var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var label3 = document.getElementById("label3");
var label4 = document.getElementById("label4");
var label1textDefault = label1.innerHTML;
var label2textDefault = label2.innerHTML;
var label3textDefault = label3.innerHTML;
var label4textDefault = label4.innerHTML;

choix1.checked = false;
choix2.checked = false;
choix3.checked = false;
aucunChoix.checked = false;

choix1.addEventListener("click", choixCliquer);
choix2.addEventListener("click", choixCliquer);
choix3.addEventListener("click", choixCliquer);
aucunChoix.addEventListener("click", choixCliquer);

var choix1actuel = false;
var choix2actuel = false;
var choix3actuel = false;
var choix4actuel = false;


function choixCliquer() {
    if (bonneReponseEntre) {
        if (bonneReponseArray[bonneReponseIndex] == 1) {
            choix1.checked = true;
        } else {
            choix1.checked = false;
        }
        if (bonneReponseArray[bonneReponseIndex] == 2) {
            choix2.checked = true;
        } else {
            choix2.checked = false;
        }
        if (bonneReponseArray[bonneReponseIndex] == 3) {
            choix3.checked = true;
        } else {
            choix3.checked = false;
        }
        if (bonneReponseArray[bonneReponseIndex] == 4) {
            aucunChoix.checked = true;
        } else {
            aucunChoix.checked = false;
        }

        return null;
    }

    if (choix1.checked == true && choix1cliquer) {
        choix1.checked = false;
    }
    else if (choix2.checked == true && choix2cliquer) {
        choix2.checked = false;
    }
    else if (choix3.checked == true && choix3cliquer) {
        choix3.checked = false;
    }
    else if (aucunChoix.checked == true && choix4cliquer) {
        aucunChoix.checked = false;
    }

    if (choix1.checked == true && choix1actuel) {
        choix1.checked = false;
    }
    else if (choix2.checked == true && choix2actuel) {
        choix2.checked = false;
    }
    else if (choix3.checked == true && choix3actuel) {
        choix3.checked = false;
    }
    else if (aucunChoix.checked == true && choix4actuel) {
        aucunChoix.checked = false;
    }

    if (choix1.checked == true) {
        choix1actuel = true;
        choix2actuel = false;
        choix3actuel = false;
        choix4actuel = false;
    }
    else if (choix2.checked == true) {
        choix1actuel = false;
        choix2actuel = true;
        choix3actuel = false;
        choix4actuel = false;
    }
    else if (choix3.checked == true) {
        choix1actuel = false;
        choix2actuel = false;
        choix3actuel = true;
        choix4actuel = false;
    }
    else if (aucunChoix.checked == true) {
        choix1actuel = false;
        choix2actuel = false;
        choix3actuel = false;
        choix4actuel = true;
    }

    else {
        choix1actuel = false;
        choix2actuel = false;
        choix3actuel = false;
        choix4actuel = false;
    }

    textStatus.innerHTML = "";
}


var textStatus = document.getElementById("textStatus");

var nbDefi = 2;
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
    3,
    4,
    4
];

var choix1cliquer;
var choix2cliquer;
var choix3cliquer;
var choix4cliquer;

function corriger() {
    if (choix1.checked == true && !choix1cliquer) {
        if (bonneReponseArray[bonneReponseIndex] == 1) {
            label1.style.color = "green";
            label1.innerHTML = "<b>" + label1textDefault + "</b>";
            bonneReponse();
        } else {
            label1.style.color = "red";
            label1.innerHTML += "&nbsp;-&nbsp;erreur"
            erreur();
            choix1cliquer = true;
        }
    }
    else if (choix2.checked == true && !choix2cliquer) {
        if (bonneReponseArray[bonneReponseIndex] == 2) {
            label2.style.color = "green";
            label2.innerHTML = "<b>" + label2textDefault + "</b>";
            bonneReponse();
        } else {
            label2.style.color = "red";
            label2.innerHTML += "&nbsp;-&nbsp;erreur"
            erreur();
            choix2cliquer = true;
        }
    }
    else if (choix3.checked == true && !choix3cliquer) {
        if (bonneReponseArray[bonneReponseIndex] == 3) {
            label3.style.color = "green";
            label3.innerHTML = "<b>" + label3textDefault + "</b>";
            bonneReponse();
        } else {
            label3.style.color = "red";
            label3.innerHTML += "&nbsp;-&nbsp;erreur"
            erreur(); + 1
            choix3cliquer = true;
        }
    }
    else if (aucunChoix.checked == true && !choix4cliquer) {
        if (bonneReponseArray[bonneReponseIndex] == 4) {
            label4.style.color = "green";
            label4.innerHTML = "<b>" + label4textDefault + "</b>";
            bonneReponse();
        } else {
            label4.style.color = "red";
            label4.innerHTML += "&nbsp;-&nbsp;erreur"
            erreur(); + 1
            choix4cliquer = true;
        }
    }

    else {
        textStatus.innerHTML = "vous n'avez pas entrez de réponse";
        textStatus.style.color = "wheat";
    }

}

var bonneReponseEntre = false;

function erreur() {
    textStatus.innerHTML = "mauvaise réponse";
    textStatus.style.color = "red";
    boutonSoumettre.value = valueInitialBoutonSoumettre;
    note--;

    choix1.checked = false;
    choix2.checked = false;
    choix3.checked = false;
    aucunChoix.checked = false;

}
function bonneReponse() {
    textStatus.innerHTML = "BRAVO : c'est la bonne réponse";
    textStatus.style.color = "green";
    boutonSoumettre.value = "prochaine question";
    boutonSoumettre.removeEventListener("click", corriger);
    boutonSoumettre.addEventListener("click", continuer);
    
    if (indexProbleme >= probleme.length - nbDefi) {
        note++;
    }

    bonneReponseEntre = true;
}

var probleme = document.getElementById("problemes").children;

var nbProbleme = probleme.length - nbDefi;
var nbProblemeTotal = probleme.length;

var noteMax = nbProbleme;

var note = noteMax;

var indexProbleme = 0;
document.getElementById("max").innerHTML = nbProbleme;
var problemeIndexDom = document.getElementById("problemeIndex");
problemeIndexDom.innerHTML = "1";

for(i = 0; i < probleme.length; i++) {
    probleme[i].style.display = "none";
}



var defiNumero = document.getElementById("defiNumero");
defiNumero.style.display = "none";
var defiIndex = document.getElementById("defiIndex");
defiIndex.innerHTML = "1";
document.getElementById("defiMax").innerHTML = nbDefi.toString();

var problemeNumero = document.getElementById("problemeNumero");
problemeNumero.style.display = "none";

var form = document.getElementById("form");
form.style.display = "none";

var commencerButton = document.getElementById("commencerButton");
commencerButton.addEventListener("click", function() {
    document.getElementById("commencer").style.display = "none";
    problemeNumero.style.display = "block";
    form.style.display = "block";
    continuer(true);
});



var buttonReessayer;


function continuer(premiereFois = false) {
    textStatus.innerHTML = "";
    if (premiereFois == true) {
        probleme[0].style.display = "block";
        return null;
    }

    probleme[indexProbleme].style.display = "none";

    indexProbleme++;

    if (indexProbleme >= nbProbleme) {
        problemeNumero.style.display = "none";
        defiNumero.style.display = "block";
        defiIndex.innerHTML = (indexProbleme - nbProbleme) + 1;
    }
    
    if (indexProbleme >= nbProblemeTotal) {
        defiNumero.style.color = "green";
        defiNumero.style.display = "none";
        
        form.style.display = "none";

        if (note < 0) {
            note = 0;
        }

        else if (note > noteMax) {
            note = noteMax;
        }
    
        var notePCT = Math.round((note* 100)/noteMax);
        textStatus.style.color = "green";

        textStatus.innerHTML =  "Votre note : " + notePCT + "% <br>";
        if (note > 1) {
            textStatus.innerHTML += "en point cela vous fait " + note + " points sur " + (noteMax) + " points ";
        }
        else {
            textStatus.innerHTML += "en point cela vous fait " + note + " point sur " + (noteMax) + "points";
        }

        if (notePCT < 60) {
            textStatus.innerHTML +=  "<br><br>Vous n'avez pas réussis les problèmes avec asser de point<br>Rechargez la page pour réessayer&nbsp;:&nbsp;";
            textStatus.innerHTML += '<input type="button" value="réessayer" id="reesayer"></input>';
            textStatus.style.color = "red";
            var buttonReessayer = document.getElementById("reesayer");
            buttonReessayer.addEventListener("click", function() {
                document.location.reload();
            });
        }
        

        return null;
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
    aucunChoix.checked = false;

    choix1cliquer = false;
    choix2cliquer = false;
    choix3cliquer = false;
    choix4cliquer = false;

    choix1actuel = false;
    choix2actuel = false;
    choix3actuel = false;
    choix4actuel = false;

    label1.style.color = "wheat";
    label1.innerHTML = label1textDefault;
    label2.style.color = "wheat";
    label2.innerHTML = label2textDefault;
    label3.style.color = "wheat";
    label3.innerHTML = label3textDefault;
    label4.style.color = "wheat";
    label4.innerHTML = label4textDefault;
    
    bonneReponseEntre = false;
}