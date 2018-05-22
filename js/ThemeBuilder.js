'use strict';
/* globals ColorPicker, DropDownMenu fontsArray */
/* exported App */

const appTemplate = document.getElementById('app-template').content;

class App {

    constructor() {

    }

    render(){
        const dom = appTemplate;

        //Background Color Picker
        const displayBackgroundColorPicker = dom.getElementById('background-color-picker');
        const displayBackgroundColorPickerComponent = new ColorPicker('Background', (colorValue) => {
            document.getElementById('mock-page-content').style.backgroundColor = '#' + colorValue + '';
        });

        const displayBGDom = displayBackgroundColorPickerComponent.render();
        displayBackgroundColorPicker.appendChild(displayBGDom);


        //Text Color Picker
        const displayTextColorPicker = dom.getElementById('text-color-picker');
        const displayTextColorPickerComponent = new ColorPicker('Text', (colorValue) => {
            document.getElementById('test').style.color = '#' + colorValue + '';
        });

        const displayTDom = displayTextColorPickerComponent.render();
        displayTextColorPicker.appendChild(displayTDom);


        //Header Color Picker
        const displayHeaderColorPicker = dom.getElementById('header-color-picker');
        const displayHeaderColorPickerComponent = new ColorPicker('Header', (colorValue) => {
            document.getElementById('mock-h1').style.color = '#' + colorValue + '';
        });

        const displayHeaderDom = displayHeaderColorPickerComponent.render();
        displayHeaderColorPicker.appendChild(displayHeaderDom);


        //Footer Color Picker
        const displayFooterColorPicker = dom.getElementById('footer-color-picker');
        const displayFooterColorPickerComponent = new ColorPicker('Footer', (colorValue) => {
            document.getElementById('footer-text').style.color = '#' + colorValue + '';
        });

        const displayFooterDom = displayFooterColorPickerComponent.render();
        displayFooterColorPicker.appendChild(displayFooterDom);
       

        const displayDropdown = dom.getElementById('header-text-dropdown');
        const displayDropdownComponent = new DropDownMenu(fontsArray, 'header-font-dd');
        const selectorDom = displayDropdownComponent.render();
        displayDropdown.appendChild(selectorDom);

        dom.getElementById('header-font-dd').addEventListener('change', () => {
            let dropDownValue = document.getElementById('header-font-dd').value;
            var displayWord = document.getElementById('mock-h1');
            displayWord.style.fontFamily = dropDownValue;
        });
        


        // const displayDropdown = dom.getElementById('display-dropdown');
        // const displayDropdownComponent = new EffectToApply();
        // const selectorDom = displayDropdownComponent.render();
        // displayDropdown.appendChild(selectorDom);


        return dom;
    }
}