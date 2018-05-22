'use strict';
/* globals ColorPicker, */
/* exported App */

const appTemplate = document.getElementById('app-template').content;

class App {

    constructor() {

    }
    // let selectedValue = document.getElementById('effects-dropdown').value;
    // console.log(selectedValue);

    render(){
        const dom = appTemplate;

        
        const displayBackgroundColorPicker = dom.getElementById('background-color-picker');
        const displayBackgroundColorPickerComponent = new ColorPicker('Background', 'bgColor');
        const displayBGDom = displayBackgroundColorPickerComponent.render();
        displayBackgroundColorPicker.appendChild(displayBGDom);

        dom.getElementById('bgColor').addEventListener('change', () => {
            let colorStart = document.getElementById('background-color-picker');
            console.log('background color');
            let colorContainer = colorStart.querySelector('div');
            let colorValue = colorContainer.querySelector('input').value;
            
            document.getElementById('mock-page-content').style.backgroundColor = '#' + colorValue + '';
        }); 



        const displayTextColorPicker = dom.getElementById('text-color-picker');
        const displayTextColorPickerComponent = new ColorPicker('Text', 'textColor');
        const displayTDom = displayTextColorPickerComponent.render();
        displayTextColorPicker.appendChild(displayTDom);
        
        dom.getElementById('textColor').addEventListener('change', () => {
            let colorStart = document.getElementById('text-color-picker');
            console.log('text color');
            let colorContainer = colorStart.querySelector('div');
            let colorValue = colorContainer.querySelector('input').value;
        
            document.getElementById('test').style.color = '#' + colorValue + '';
        });



        const displayHeaderColorPicker = dom.getElementById('header-color-picker');
        const displayHeaderColorPickerComponent = new ColorPicker('Header', 'headerColor');
        const displayHeaderDom = displayHeaderColorPickerComponent.render();
        displayHeaderColorPicker.appendChild(displayHeaderDom);

        dom.getElementById('headerColor').addEventListener('change', () => {
            let colorStart = document.getElementById('header-color-picker');
            let colorContainer = colorStart.querySelector('div');
            let colorValue = colorContainer.querySelector('input').value;
            
            document.getElementById('mock-h1').style.color = '#' + colorValue + '';
        });

        const displayFooterColorPicker = dom.getElementById('footer-color-picker');
        const displayFooterColorPickerComponent = new ColorPicker('Footer', 'footerColor');
        const displayFooterDom = displayFooterColorPickerComponent.render();
        displayFooterColorPicker.appendChild(displayFooterDom);

        dom.getElementById('footerColor').addEventListener('change', () => {
            let colorStart = document.getElementById('footer-color-picker');
            let colorContainer = colorStart.querySelector('div');
            let colorValue = colorContainer.querySelector('input').value;
            
            document.getElementById('flex-footer').style.color = '#' + colorValue + '';
        });

        const displayDropdown = dom.getElementById('header-text-dropdown');
        const displayDropdownComponent = new DropDownMenu(fontsArray, 'header-font-dd');
        const selectorDom = displayDropdownComponent.render();
        displayDropdown.appendChild(selectorDom);

        dom.getElementById('header-font-dd').addEventListener('change', () => {
            let dropDownValue = document.getElementById('header-font-dd').value;
            var displayWord = document.getElementById('mock-h1');
            displayWord.style.fontFamily = dropDownValue;
            // displayWord.removeAttribute('class');
            // displayWord.setAttribute('class', dropDownValue);
        });
        


        // const displayDropdown = dom.getElementById('display-dropdown');
        // const displayDropdownComponent = new EffectToApply();
        // const selectorDom = displayDropdownComponent.render();
        // displayDropdown.appendChild(selectorDom);


        return dom;
    }
}