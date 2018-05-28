'use strict';
/* globals DropDownMenu, effectsArray */
/* exported App */

const appTemplate = document.getElementById('app-template').content;

class App {

    render(){
        const dom = appTemplate;

        const displayDropdown = dom.getElementById('display-dropdown');
        const displayDropdownComponent = new DropDownMenu(effectsArray, 'effectChange', (dropDownValue) => {
            var displayWord = document.getElementById('displayWord');
            displayWord.removeAttribute('class');
            displayWord.setAttribute('class', dropDownValue);
        });

        const selectorDom = displayDropdownComponent.render();
        displayDropdown.appendChild(selectorDom);

        return dom;
    }
}