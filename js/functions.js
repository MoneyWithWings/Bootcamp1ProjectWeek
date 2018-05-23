'use strict';
/* exported updateDisplayWord, updateBackgroundColor, updateInputWord */

let bgColor = document.getElementById('bgHexValue');
let bodyTextColor = document.getElementById('bodyTextHexValue');
let headerTextColor = document.getElementById('headerTextHexValue');
let footerTextColor = document.getElementById('footerTextHexValue');
let headerFontValue = document.getElementById('headerFontChange');

function saveValues(){
    let saveBgColor = bgColor.value;
    let saveBodyTextColor = bodyTextColor.value;
    let saveHeaderTextColor = headerTextColor.value;
    let saveFooterTextColor = footerTextColor.value;
    let saveHeaderFontValue = headerFontValue.value;
    console.log(saveBgColor);
    console.log(saveBodyTextColor);
    console.log(saveHeaderTextColor);
    console.log(saveFooterTextColor);
    console.log(saveHeaderFontValue);

}

function updateDisplayWord() {
    var dropDownValue = document.getElementById('drop-down-id').value;
    var displayWord = document.getElementById('displayWord');
    displayWord.removeAttribute('class');
    displayWord.setAttribute('class', dropDownValue);
}

function updateBackgroundColor() {
    let colorStart = document.getElementById('background-color-picker');
    let colorContainer = colorStart.querySelector('div');
    let colorValue = colorContainer.querySelector('input').value;

    document.querySelector('body').style.backgroundColor = '#' + colorValue + '';
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

