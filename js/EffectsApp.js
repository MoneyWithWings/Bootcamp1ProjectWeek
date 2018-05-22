'use strict';
/* globals WordToDisplay, InputText, EffectToApply */
/* exported App */

const appTemplate = document.getElementById('app-template').content;

class App {

    constructor() {

    }
    // let selectedValue = document.getElementById('effects-dropdown').value;
    // console.log(selectedValue);

    render(){
        const dom = appTemplate;

        const displayWordSection = dom.getElementById('display-word');
        const displayWordComponent = new WordToDisplay();
        const displayWordDom = displayWordComponent.render();
        displayWordSection.appendChild(displayWordDom);

        const displayInputSection = dom.getElementById('display-input');
        const displayInputComponent = new InputText();
        const inputDom = displayInputComponent.render();
        displayInputSection.appendChild(inputDom);

        const displayDropdown = dom.getElementById('display-dropdown');
        const displayDropdownComponent = new EffectToApply();
        const selectorDom = displayDropdownComponent.render();
        displayDropdown.appendChild(selectorDom);


        return dom;
    }
}