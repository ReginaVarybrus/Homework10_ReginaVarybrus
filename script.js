'use strict';

const selTxt = document.getElementById('selected');
const outsideSpace = document.getElementsByTagName('body');
const enterTxt = document.getElementById('body-input');
const alertBtn = document.getElementById('btn-ok');

function onDivClickHandler(event) {
    selTxt.textContent = event.target.getAttribute("div-name");
    event.stopPropagation();
}

outsideSpace[0].addEventListener('click', (event) => {
    selTxt.textContent = '';
});

function onFirstButtonHandler(event) {
    selTxt.textContent = 'BTN1 was pressed';
    event.stopPropagation();
}

function onSecondButtonHandler(event) {
    selTxt.textContent = 'BTN2 was pressed';
    event.stopPropagation();
}

enterTxt.addEventListener('keypress', checkLetter);

function checkLetter(event) {
    var charCode = event.charCode;
    if (charCode != 0) {
        if (charCode < 97 || charCode > 122) {
            event.preventDefault();
        } 
    }
}

enterTxt.addEventListener('input', () => {
    alertBtn.disabled = (enterTxt.value == '');
});



alertBtn.addEventListener('click', (event) => {
    if (enterTxt.value != '') {
        alertBtn.disabled = false;
        alert(enterTxt.value);
    } 
    else {
        alertBtn.disabled = true;
    } 
});





