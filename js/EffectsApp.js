'use strict';
/* globals DropDownMenu, effectsArray */
/* exported App */

const appTemplate = document.getElementById('app-template').content;

class App {

    constructor() {

    }
    // let selectedValue = document.getElementById('effects-dropdown').value;
    // console.log(selectedValue);

    render(){
        const dom = appTemplate;


        const displayDropdown = dom.getElementById('display-dropdown');
        const displayDropdownComponent = new DropDownMenu(effectsArray, (dropDownValue) => {
            var displayWord = document.getElementById('displayWord');
            displayWord.removeAttribute('class');
            displayWord.setAttribute('class', dropDownValue);
        });

        const selectorDom = displayDropdownComponent.render();
        displayDropdown.appendChild(selectorDom);

        return dom;
    }
}