"use strict";
var form = document.querySelector('form');
var userWeight = document.querySelector('#user-weight');
var userHeight = document.querySelector('#user-height');
var imc;
var Modal = {
    screen: document.querySelector('.modal-wrapper'),
    message: document.querySelector('#result'),
    buttonClose: document.querySelector('.close'),
    open: function () {
        this.screen.classList.add('open');
        Modal.message.innerText = "Seu IMC \u00E9 de: ".concat(calcIMC());
    },
    close: function () {
        this.screen.classList.remove('open');
        resetInputs();
    }
};
Modal.buttonClose.addEventListener('click', function () {
    Modal.close();
});
window.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        Modal.close();
    }
});
form.onsubmit = function (event) {
    event.preventDefault();
    if (notANumber(Number(userWeight.value)) || notANumber(Number(userHeight.value))) {
        AlertError.open();
    }
    else {
        Modal.open();
        AlertError.close();
    }
};
function calcIMC() {
    var weight = Number(userWeight.value);
    var height = Number(userHeight.value) / 100;
    return imc = (weight / (height * height)).toFixed(2);
}
function resetInputs() {
    userWeight.value = '';
    userHeight.value = '';
}
function notANumber(value) {
    return isNaN(value) || value === undefined;
}
var AlertError = {
    element: document.querySelector('.alert-error'),
    open: function () {
        this.element.classList.add('open');
    },
    close: function () {
        this.element.classList.remove('open');
    }
};
