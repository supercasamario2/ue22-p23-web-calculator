// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

let display = document.querySelector('.calculator__display');
let currentNumber = '';
let currentOperation = ''; 
let storedNumber = '';
let lastButtonWasOperation = false;
let thereisOperation = false;

/*
Les flags précédent sont utilisés pour gérer les calculs ainsi que pour 
éviter les bugs.
*/

window.addEventListener("load",() => {
    let bouttons = document.querySelectorAll("button")
    for (let boutton of bouttons) {
        boutton.addEventListener("click", (evenement) => {
        const bouton = evenement.target;
        console.log(bouton.textContent);
        // Si le bouton est un nombre ou un point
        if (!isNaN(bouton.textContent) || (bouton.textContent == "-" && currentNumber == '')) {
            currentNumber += bouton.textContent;
            display.textContent = currentNumber;
            lastButtonWasOperation = false;
        } else if (bouton.textContent == ".") {
            currentNumber += bouton.textContent;
            display.textContent = currentNumber;
        }
        // Pour clear l'afficheur
        else if (bouton.textContent == "AC") {
            currentNumber = '';
            storedNumber = '';
            display.textContent = currentNumber;
            thereisOperation = false;
            lastButtonWasOperation = false;
        }
        // Gérer les opérations
        else if (["+", "-", "×", "÷"].includes(bouton.textContent)) {
            if (lastButtonWasOperation && (bouton.textContent == "×" || bouton.textContent == "÷")) {
                return;
            }
            if (thereisOperation) {
                return;
            }
            currentOperation = bouton.textContent;
            storedNumber = currentNumber;
            currentNumber = '';
            display.textContent += currentOperation;
            lastButtonWasOperation = true;
            thereisOperation = true;
        }
        // Gérer le bouton égal 
        if (bouton.textContent == "=") {
            if (currentOperation == '+') {
                currentNumber = parseFloat(currentNumber) + parseFloat(storedNumber);
            }
            else if (currentOperation == '-') {
                currentNumber = parseFloat(storedNumber) - parseFloat(currentNumber);
            }
            else if (currentOperation == '×') {
                currentNumber = parseFloat(currentNumber) * parseFloat(storedNumber);
            }
            else if (currentOperation == '÷') {
                currentNumber = parseFloat(storedNumber) / parseFloat(currentNumber);
            }
            currentOperation = '';
            lastButtonWasOperation = false;
            thereisOperation = false;
            display.textContent = currentNumber;
        }
        });
    }
})



