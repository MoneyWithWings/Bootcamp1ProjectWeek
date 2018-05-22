'use strict';
/* exported updateDisplayWord */


function updateDisplayWord() {
    var dropDownValue = document.getElementById('dropdown').value;
    console.log('Drop down value is ', dropDownValue);
    var displayWord = document.getElementById('displayWord');

    displayWord.removeAttribute('class');
    console.log('CLASS attribute removed');
    
    displayWord.setAttribute('class', dropDownValue);
    console.log('Added drop down class ', dropDownValue);
}

function updateBackgroundColor() {
    let colorStart = document.getElementById('background-color-picker');
    let colorContainer = colorStart.querySelector('div');
    let colorValue = colorContainer.querySelector('input').value;

    document.querySelector('body').style.backgroundColor = '#' + colorValue + '';
}