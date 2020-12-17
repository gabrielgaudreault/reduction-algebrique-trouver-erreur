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
        aucunChoix.checked = false;

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
        choix4.checked = false;
    }

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
            erreur();
            choix3cliquer = true;
        }
    }
    else if (aucunChoix.checked == true && !choix4cliquer) {
        label4.style.color = "red";
        label4.innerHTML += "&nbsp;-&nbsp;erreur"
        erreur();
        choix4cliquer = true;
    }

    else {
        textStatus.innerHTML = "vous n'avez pas entrez de réponse";
        textStatus.style.color = "wheat";
    }

}

var bonneReponseEntre = false;

function erreur() {
    textStatus.innerHTML = "erreur";
    textStatus.style.color = "red";
    boutonSoumettre.value = valueInitialBoutonSoumettre;
    note--;

    choix1.checked = false;
    choix2.checked = false;
    choix3.checked = false;
    aucunChoix.checked = false;

}
function bonneReponse() {
    textStatus.innerHTML = "bonne réponse";
    textStatus.style.color = "green";
    boutonSoumettre.value = "continuer";
    boutonSoumettre.removeEventListener("click", corriger);
    boutonSoumettre.addEventListener("click", continuer); 
    bonneReponseEntre = true;
}

var spanPobleme = document.getElementById("probleme");

var probleme = spanPobleme.children;

var nbProbleme = probleme.length;
var note = nbProbleme;

var indexProbleme = 0;
document.getElementById("max").innerHTML = probleme.length;
var problemeIndexDom = document.getElementById("problemeIndex");

continuer(true);

var buttonReessayer;

function continuer(premiereFois = false) {
    textStatus.innerHTML = "";
    if (premiereFois == true) {
        for(i = 1; i < probleme.length; i++) {
            probleme[i].style.display = "none";
        }
        probleme[0].style.display = "block";
        return null;
    }

    probleme[indexProbleme].style.display = "none";

    indexProbleme++;
    
    if (indexProbleme >= nbProbleme) {
        document.getElementById("problemeNumero").style.color = "green";
        textStatus.innerHTML = "Vous avez fait tous les problèmes";

        if (note < 0) {
            note = 0;
        }
    

        textStatus.innerHTML =  "<br><br>Votre note : "+(note/nbProbleme)*100+"%";
        if (note/nbProbleme < 6) {
            textStatus.innerHTML +=  "<br>Rechargez la page pour réessayer&nbsp;:&nbsp;";
            textStatus.innerHTML += '<input type="button" value="réessayer" id="reesayer"></input>';
            buttonReessayer = document.getElementById("reesayer");
            buttonReessayer.addEventListener("click", function() {
                document.location.reload();
            });
        }
        textStatus.style.color = "green";
        document.getElementById("form").style.display = "none";

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