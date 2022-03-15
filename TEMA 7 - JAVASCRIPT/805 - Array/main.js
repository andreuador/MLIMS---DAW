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

function main() {
    let checkList = document.querySelector('#check-list');

    for (let i = 0; i < 10; i++) {
        let listItem = document.createElement("li");
        checkList.appendChild(listItem);

        let number = random(0,99);

        let checkboxLabel = document.createElement('label');
        let checkboxInput = document.createElement('input');
        checkboxInput.type = "checkbox";
        checkboxInput.value = number;

        checkboxLabel.appendChild(checkboxInput);
        checkboxLabel.appendChild(document.createTextNode(number));
        checkList.appendChild(checkboxLabel);
    }

    let btnSelectAll = document.querySelector('#button-select-all');
    let btndeSelectAll = document.querySelector('#button-deselect-all');

    btnSelectAll.addEventListener('click', selectAll);
    btndeSelectAll.addEventListener('click', deselectAll);
}

document.addEventListener('DOMContentLoaded', main);
