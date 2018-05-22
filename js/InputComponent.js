'use strict';
/* globals */
/* exported InputText updateInputWord */

const inputTemplate = document.getElementById('input-template').content;

class InputText {

    constructor() {

    }

    render() {

        const dom = inputTemplate;

        

        return dom;
    }
}

function updateInputWord() {
    const input = document.getElementById('input-text-box').value;
    const displayWord = document.getElementById('displayWord');
    if(input) {
        displayWord.innerHTML = input;
    } else {
        displayWord.innerHTML = 'Enter text!';
    }
}