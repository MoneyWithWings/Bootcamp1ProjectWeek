'use strict';
/* exported updateDisplayWord, updateBackgroundColor, updateInputWord, saveValues, getPresetByName, applyPreset, updateSaveList, clearValues*/
/* globals NewSave, saveArray */

//variables grabbing tags that have values to be saved
let saveName = document.getElementById('save-input');
let bgColor = document.getElementById('bgHexValue');
let bodyTextColor = document.getElementById('bodyTextHexValue');
let headerTextColor = document.getElementById('headerTextHexValue');
let footerTextColor = document.getElementById('footerTextHexValue');
let headerFontValue = document.getElementById('headerFontChange');
let bodyFontValue = document.getElementById('bodyFontChange');


//Function that loops through save array and acquires a value based on its name
function getPresetByName(data, name) {
    for(let i = 0; i < data.length; i++) {
        if(name === data[i].name) {
            return data[i];
        }
    }
}
//clears values from local storage
function clearValues(){
    window.localStorage.clear();
    saveArray = [];
}

//applies values that are loaded from a save file NOTE: THIS DOESN'T APPLY BODY FONT STYLINGS YET
function applyPreset(preset) {
    document.getElementById('mock-page-content').style.backgroundColor = '#' + preset.backgroundColor + '';
    document.getElementById('test').style.color = '#' + preset.bodyTextColor + '';
    document.getElementById('mock-h1').style.color = '#' + preset.headerTextColor + '';
    document.getElementById('footer-text').style.color = '#' + preset.footerTextColor + '';
    document.getElementById('mock-h1').style.fontFamily = preset.headerFont;

}
//runs the update saves method, used for clearing
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
    let saveBodyFontValue = bodyFontValue.value;


    let dupeCount = false;

    for(let i = 0; i < saveArray.length; i++) {
        if(saveNameValue === saveArray[i].name) {
            dupeCount = true;
        }
    }
    if(saveArray.length >= 0 && dupeCount === false){
        let saveObject = new NewSave(saveNameValue, saveBgColor, saveBodyTextColor, saveHeaderTextColor, saveFooterTextColor, saveHeaderFontValue, saveBodyFontValue);
        saveArray.push(saveObject);
    
    
        window.localStorage.setItem('saves', JSON.stringify(saveArray));

    } else {
        alert('There is already a save by that name. Please enter a new name.');
    }

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

