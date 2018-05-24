'use strict';
/* exported updateDisplayWord, updateBackgroundColor, updateInputWord, saveValues, getPresetByName, applyPreset, updateSaveList*/
/* globals NewSave, saveArray */
let saveName = document.getElementById('save-input');
let bgColor = document.getElementById('bgHexValue');
let bodyTextColor = document.getElementById('bodyTextHexValue');
let headerTextColor = document.getElementById('headerTextHexValue');
let footerTextColor = document.getElementById('footerTextHexValue');
let headerFontValue = document.getElementById('headerFontChange');

console.log(saveName);

function getPresetByName(data, name) {
    for(let i = 0; i < data.length; i++) {
        if(name === data[i].name) {
            return data[i];
        }
    }
}

function clearValues(){
    window.localStorage.clear();
    
}


function applyPreset(preset) {
    document.getElementById('mock-page-content').style.backgroundColor = '#' + preset.backgroundColor + '';
    document.getElementById('test').style.color = '#' + preset.bodyTextColor + '';
    document.getElementById('mock-h1').style.color = '#' + preset.headerTextColor + '';
    document.getElementById('footer-text').style.color = '#' + preset.footerTextColor + '';
    document.getElementById('mock-h1').style.fontFamily = preset.headerFont;
    //bgColor.value = preset.backgroundColor;
}

function updateSaveList(){
    this.updateSaves();
}

function saveValues(){
    let saveNameValue = saveName.value;
    let saveBgColor = bgColor.value;
    let saveBodyTextColor = bodyTextColor.value;
    let saveHeaderTextColor = headerTextColor.value;
    let saveFooterTextColor = footerTextColor.value;
    let saveHeaderFontValue = headerFontValue.value;

    for(let i = 0; i < saveArray.length; i++) {
        if(saveNameValue === saveArray[i].name) {
            alert('This is already a saved value. Please change the name of your save');
            break;
        }
    }
    let saveObject = new NewSave(saveNameValue, saveBgColor, saveBodyTextColor, saveHeaderTextColor, saveFooterTextColor, saveHeaderFontValue);
    saveArray.push(saveObject);
    console.log(saveArray);

    window.localStorage.setItem('saves', JSON.stringify(saveArray));

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

