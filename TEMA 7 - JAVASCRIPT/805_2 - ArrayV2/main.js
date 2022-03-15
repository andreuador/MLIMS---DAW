"use strict";

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function selectAll() {
    let checkboxes = document.querySelectorAll('input[type=checkbox]');

    for (let index = 0; index < checkboxes.length; index++) {
        const element = checkboxes[index];
        element.checked = true;
    }
}

function deselectAll() {
    let checkboxes = document.querySelectorAll('input[type=checkbox]');

    for (let index = 0; index < checkboxes.length; index++) {
        const element = checkboxes[index];
        element.checked = false;
    }
}

function callGenerateCheckboxes() {
    let inputNumber = document.querySelector("#input-number");
    removeCheckboxes();
    generateCheckboxes(inputNumber.value);
}

function removeCheckboxes() {
    let checkList = document.querySelector('#check-list');

    for (let i = 0; i < 10; i++) {
        let listItem = document.createElement("li");
        checkList.appendChild(listItem);
    }

    function generateCheckboxes(number) {
        let checkList = document.querySelector('#check-list');

        for (let i = 0; i < 10; i++) {
            let listItem = document.createElement("li");
            checkList.appendChild(listItem);

            let number = random(0, 99);

            let checkboxLabel = document.createElement('label');
            let checkboxInput = document.createElement('input');
            checkboxInput.type = "checkbox";
            checkboxInput.value = number;

            checkboxLabel.appendChild(checkboxInput);
            checkboxLabel.appendChild(document.createTextNode(number));
            checkList.appendChild(checkboxLabel);
        }
    }

    function main() {

        let btnSelectAll = document.querySelector('#button-select-all');
        let btndeSelectAll = document.querySelector('#button-deselect-all');
        let btnGenerate = document.querySelector("#button-generate")

        btnSelectAll.addEventListener('click', selectAll);
        btndeSelectAll.addEventListener('click', deselectAll);

        btnGenerate.addEventListener('click', callGenerateCheckboxes);
    }

    document.addEventListener('DOMContentLoaded', main);
