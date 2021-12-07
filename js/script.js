/*'use strict'; // va permettre de révéler les fautes en erreurs afin de les corriger et d'éviter des bugs

var choix = ['pierre', 'papier', 'ciseaux'];
var choixOrdi;
var choixJoueur;
//var result = [choixOrdi, choixJoueur];
var scoreOrdi;
var scoreJoueur;
const scoreJoueurSpan = document.getElementById('user-score');
const scoreOrdiSpan = document.getElementById('computer-score');
//var result_div;
var result_div = document.querySelector(".result");
//var pierre_div;
var pierre_div = document.getElementById("pierre");
//var papier_div;
var papier_div = document.getElementById("papier");
//var ciseaux_div;
var ciseaux_div = document.getElementById("ciseaux");


// fonction qui nous donne le choix de l'ordinateur
function getComputerChoice() {
    // générer un indice entre 0 et 3, l'arrondir à un entier et l'utiliser pour localiser un item 'string' du tableau choix[], puis l'affecter à la variable choixOrdi
    var choixOrdi = choix[Math.round(Math.random()*2)];
    console.log(choixOrdi);
    return  
};

// fonction qui remet les compteurs à zéro lorsque l'un des 2 joueurs perd
function reset() {
    scoreJoueur = 0;
    scoreOrdi = 0;
    
    // injecter le score zéro dans les spans HTML correspondant aux scores du joueur et de l'ordinateur
    scoreJoueurSpan.innerHTML = scoreJoueur;
    scoreOrdiSpan.innerHTML = scoreOrdi;
};

// fonction qui gère le score du joueur
function win() {
    scoreJoueur++;
    scoreJoueurSpan.innerHTML = scoreJoueur;
    if (scoreJoueur == 5) {
        alert(' Vous êtes arrivés à 5 points, vous avez gagné !');
        reset();
    } /*else if (scoreOrdi == 5) {
        alert(" L'ordinateur est arrivé à 5 points, vous avez perdu !");
        reset();
    }
};

// fonction qui gère le score de l'ordinateur
function lose() {
    scoreOrdi++;
    scoreOrdiSpan.innerHTML = scoreOrdi;
    if (scoreOrdi == 5) {
        alert(" L'ordinateur est arrivé à 5 points, vous avez perdu !");
        reset();
    }

};

// function qui gère l'égalité entre les 2 joueurs
function equal() {
    if (scoreOrdi == 5 && scoreJoueur == 5) {
        result_div.innerHTML = "Égalité";
        reset();
    }
    
};

// fonction qui gère les choix du joueur et de l'ordinateur
function game(choixJoueur){
    let gameOrdi = getComputerChoice();
    switch ( choixJoueur + gameOrdi ) {
        case 'ciseaux papier':
        case 'pierre ciseaux':
        case 'papier pierre':
                win();
            break;
        case 'papier ciseaux':
        case 'ciseaux pierre':
        case 'pierre papier':
                lose();
            break;
        case 'ciseaux ciseaux':
        case 'pierre pierre':
        case 'papier papier':
                equal();
            break;  
    }
};

// fonction qui gère les évènements
function main() {
    pierre_div.addEventListener('click', function(){
        game("pierre")});

    papier_div.addEventListener('click', function(){
        game("papier")});

    ciseaux_div.addEventListener('click', function(){
        game("ciseaux")});
    //papier_div
    //ciseaux_div
};

main();*/

//document.getElementsByClassName('choice').addEventListener('click', getComputerChoice);

'use strict'; // va permettre de révéler les fautes en erreurs afin de les corriger et d'éviter des bugs

let userScore = 0;
let computerScore = 0;

let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');

let scoreBoard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".result");

let pierre_div = document.getElementById("pierre");
let papier_div = document.getElementById("papier");
let ciseau_div = document.getElementById("ciseaux");


// fonction qui nous donne le choix de l'ordinateur
function getComputerChoice() {
     let choices = ['Ciseaux', 'Pierre', 'Papier'];
     const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

// fonction qui remet les compteurs à zéro lorsque l'un des 2 joueurs perd
function reset() {
    userScore = 0;
    computerScore = 0;
    computerScore_span.innerHTML = computerScore
    userScore_span.innerHTML = userScore;
};

// fonction qui rajoute +1 au joueur quand il gagne
function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "<p>Bravo +1 point(s)!</p>";

    if (userScore == 10) {
        alert("Vous avez gagné!");
        reset();
    }
};

// fonction qui rajoute +1 à l'ordinateur quand il gagne
function lose() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "<p>L\'ordinateur a +1 point(s)!</p>";

    if (computerScore == 10) {
        alert("L\'ordinateur a gagné!");
        reset();
    }
};

// function qui gère l'égalité entre les 2 joueurs
function equal() {
    result_div.innerHTML = "<p>Il y a égalité!</p>";
};

// fonction qui gère les choix du joueur et de l'ordinateur
function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch( userChoice + computerChoice) {
        case "CiseauxPapier":
        case "PapierPierre":
        case "PierreCiseaux":
            win();
            break;
        
        case "PapierCiseaux":
        case "PierrePapier":
        case "CiseauxPierre":
            lose();
            break;

        case "PapierPapier":
        case "PierrePierre":
        case "CiseauxCiseaux":
            equal();
            break;
    }
};

// fonction qui gère les évènements
function main() {
    pierre_div.addEventListener('click', function() {
        game("Pierre");
    });

    papier_div.addEventListener('click', function() {
        game("Papier");
    });

    ciseau_div.addEventListener('click', function() {
        game("Ciseaux");
    });
};

main();

