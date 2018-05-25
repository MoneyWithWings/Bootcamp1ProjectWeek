'use strict';
/* exported updateDisplayWord, updateInputWord, saveValues, getPresetByName, applyPreset, updateSaveList, clearValues*/
/* globals NewSave, saveArray */

//variables grabbing tags that have values to be saved
let saveName = document.getElementById('save-input');
let bgColor = document.getElementById('bgHexValue');
let btColor = document.getElementById('bodyTextHexValue');
let htColor = document.getElementById('headerTextHexValue');
let ftColor = document.getElementById('footerTextHexValue');
let headerFontValue = document.getElementById('headerFontChange');
let bodyFontValue = document.getElementById('bodyFontChange');


//Function that loops through save array and acquires a selected value based on its name
//please refer to DropDownComponent for where this is used
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
    // saveArray = [];
    window.location.reload();
}

//applies values that are loaded from a save file
//please refer to ThemeBuilder.js for where this function is used
function applyPreset(preset) {
    document.getElementById('mock-page-content').style.backgroundColor = '#' + preset.backgroundColor + '';
    document.getElementById('test').style.color = '#' + preset.bodyTextColor + '';
    document.getElementById('mock-h1').style.color = '#' + preset.headerTextColor + '';
    document.getElementById('footer-text').style.color = '#' + preset.footerTextColor + '';
    document.getElementById('mock-h1').style.fontFamily = preset.headerFont;
    document.getElementById('test').style.fontFamily = preset.bodyFont;

    bgColor.value = preset.backgroundColor;
    btColor.value = preset.bodyTextColor;
    htColor.value = preset.headerTextColor;
    ftColor.value = preset.footerTextColor;
    headerFontValue.value = preset.headerFont;
    bodyFontValue.value = preset.bodyFont;

    bgColor.style.backgroundColor = '#' + preset.backgroundColor + '';
    btColor.style.backgroundColor = '#' + preset.bodyTextColor + '';
    htColor.style.backgroundColor = '#' + preset.headerTextColor + '';
    ftColor.style.backgroundColor = '#' + preset.footerTextColor + '';


}
//runs the update saves method, used for clearing
function updateSaveList(){
    this.updateSaves();
}
//saves values from all input fields
function saveValues(){
    let saveNameValue = saveName.value;
    let saveBgColor = bgColor.value;
    let saveBodyTextColor = btColor.value;
    let saveHeaderTextColor = htColor.value;
    let saveFooterTextColor = ftColor.value;
    let saveHeaderFontValue = headerFontValue.value;
    let saveBodyFontValue = bodyFontValue.value;

    //needed to determine if there is a repeat name value inside of the saved objects
    let dupeCount = false;
    //loops through the saved values, if it finds a repeat makes dupeCount true
    for(let i = 0; i < saveArray.length; i++) {
        if(saveNameValue === saveArray[i].name) {
            dupeCount = true;
        }
    }
    //if dupeCount is false then save the value, if it's not then alert the user and don't save
    if(saveArray.length >= 0 && dupeCount === false){
        let saveObject = new NewSave(saveNameValue, saveBgColor, saveBodyTextColor, saveHeaderTextColor, saveFooterTextColor, saveHeaderFontValue, saveBodyFontValue);
        saveArray.push(saveObject);
    
    
        window.localStorage.setItem('saves', JSON.stringify(saveArray));

    } else {
        alert('There is already a save by that name. Please enter a new name.');
    }
    //using this to reset the input field to blank after save
    saveName.value = '';

}

function updateDisplayWord() {
    var dropDownValue = document.getElementById('drop-down-id').value;
    var displayWord = document.getElementById('displayWord');
    displayWord.removeAttribute('class');
    displayWord.setAttribute('class', dropDownValue);
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

