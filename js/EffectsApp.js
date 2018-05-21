'use strict';

const appTemplate = document.getElementById('app-template').content

new App {

    constructor() {
        this.effect = effect;
    }

    render(){
        const dom = appTemplate;

        const displayDropdown = dom.getElementById('dropdown')
        let selectedValue = document.getElementById('dropdown').value
        const displayComponent = new EffectToApply(selectedValue);
        const selectorDom = displayComponent.render();
        displayDropdown.appendChild(selectorDom);

        return dom;
    }
}