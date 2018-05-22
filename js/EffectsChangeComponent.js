'use strict';
/* globals */
/* exported EffectToApply, DropDownMenu*/

const dropDownTemplate = document.getElementById('dropdown-template').content;

class DropDownMenu {

    constructor(data, id) {
        this.data = data;
        this.id = id;

    }

    render() {

        const dom = dropDownTemplate.cloneNode(true);
        const dropDownId = dom.querySelector('select');
        dropDownId.setAttribute('id', this.id);

        for(var i = 0; i < this.data.length; i++) {
            
        }
        // this.container = dom.querySelector('select');
        // const chosenEffect = this.container.querySelector('option');
        // chosenEffect.addEventListener('select', () => {
        //     let selectedEffect = document.getElementById('dropdown').value;
        //     let headerElement = document.getElementById('sample-header');
        //     headerElement.setAttribute("class", selectedEffect);
        // });

        return dom;


    }
}