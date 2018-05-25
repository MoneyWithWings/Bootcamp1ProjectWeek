'use strict';
/* globals ColorPicker, DropDownMenu fontsArray saveArray applyPreset*/
/* exported App */

const appTemplate = document.getElementById('app-template').content;

class App {

    constructor() {

    }

    render(){
        const dom = appTemplate;

        //Background Color Picker
        const displayBackgroundColorPicker = dom.getElementById('background-color-picker');
        const displayBackgroundColorPickerComponent = new ColorPicker('Background Color:', 'bgHexValue', (colorValue) => {
            document.getElementById('mock-page-content').style.backgroundColor = '#' + colorValue + '';
        });

        const displayBGDom = displayBackgroundColorPickerComponent.render();
        displayBackgroundColorPicker.appendChild(displayBGDom);


        //Text Color Picker
        const displayTextColorPicker = dom.getElementById('text-color-picker');
        const displayTextColorPickerComponent = new ColorPicker('Text Color:', 'bodyTextHexValue', (colorValue) => {
            document.getElementById('test').style.color = '#' + colorValue + '';
        });

        const displayTDom = displayTextColorPickerComponent.render();
        displayTextColorPicker.appendChild(displayTDom);


        //Header Color Picker
        const displayHeaderColorPicker = dom.getElementById('header-color-picker');
        const displayHeaderColorPickerComponent = new ColorPicker('Header Color:', 'headerTextHexValue', (colorValue) => {
            document.getElementById('mock-h1').style.color = '#' + colorValue + '';
        });

        const displayHeaderDom = displayHeaderColorPickerComponent.render();
        displayHeaderColorPicker.appendChild(displayHeaderDom);


        //Footer Color Picker
        const displayFooterColorPicker = dom.getElementById('footer-color-picker');
        const displayFooterColorPickerComponent = new ColorPicker('Footer Color:', 'footerTextHexValue', (colorValue) => {
            document.getElementById('footer-text').style.color = '#' + colorValue + '';
        });

        const displayFooterDom = displayFooterColorPickerComponent.render();
        displayFooterColorPicker.appendChild(displayFooterDom);
       
        
        //Header Font Drop-Down Menu
        const displayDropdown = dom.getElementById('header-text-dropdown');
        const displayDropdownComponent = new DropDownMenu(fontsArray, 'headerFontChange', (dropDownValue) => {
            var displayWord = document.getElementById('mock-h1');
            displayWord.style.fontFamily = dropDownValue;
        });
        
        const selectorDom = displayDropdownComponent.render();
        displayDropdown.appendChild(selectorDom);


        //Body Text Font Drop-Down Menu
        const displayBodyFont = dom.getElementById('body-text-font-dropdown');
        const displayBodyFontComponent = new DropDownMenu(fontsArray, 'bodyFontChange', (bodyFontValue) => {
            var bodyFontContent = document.getElementById('test');
            bodyFontContent.style.fontFamily = bodyFontValue;
        });

        const selectorBodyDom = displayBodyFontComponent.render();
        displayBodyFont.appendChild(selectorBodyDom);

        //variables for using the save and clear buttons, needed to feed data into the component
        let acquireSaveButton = document.getElementById('save-button');
        let acquireClearButton = document.getElementById('clear-button');
        //load the saves drop down component
        const loadDropDown = dom.getElementById('load-dropdown');
        const displayLoadDropDownComponent = new DropDownMenu(saveArray, 'loadOptionsDropDown', (dropDownValue) => {
            //applies the values from the selected value in the saves dropdown component and applies them to the page elements
            //please refer to js/functions.js applyPreset to see how this code works
            applyPreset(dropDownValue);
        }, acquireSaveButton, acquireClearButton);


        const displayLoadDropDownDom = displayLoadDropDownComponent.renderSaves();
        loadDropDown.appendChild(displayLoadDropDownDom);


        return dom;
    }
}