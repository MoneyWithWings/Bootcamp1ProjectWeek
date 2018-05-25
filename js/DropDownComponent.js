'use strict';
/* globals getPresetByName*/
/* exported EffectToApply, DropDownMenu, */

const dropDownTemplate = document.getElementById('dropdown-template').content;

class DropDownMenu {

    constructor(data, id, onSelect, saveButton, clearButton) {
        this.data = data;
        this.id = id;
        this.onSelect = onSelect;
        this.saveButton = saveButton;
        this.clearButton = clearButton;
    }

    render() {

        const dom = dropDownTemplate.cloneNode(true);
        const dropDownId = dom.querySelector('select');
        dropDownId.addEventListener('change', () => {
            this.onSelect(dropDownId.value);
        });
        dropDownId.setAttribute('id', this.id);

        for(var i = 0; i < this.data.length; i++) {
            let newOption = document.createElement('option');
            newOption.setAttribute('value', this.data[i].class);
            newOption.textContent = this.data[i].label;
            dropDownId.appendChild(newOption);
        }

        return dom;

    }

    clearSaves() {
        while(this.dropDownId.lastElementChild) {
            this.dropDownId.lastElementChild.remove();

        }
    }
    
    updateSaves(data) {
        this.data = data;

        while(this.dropDownId.lastElementChild) {
            this.dropDownId.lastElementChild.remove();
        }
        
        for(var i = 0; i < this.data.length; i++) {
            let newOption = document.createElement('option');
            
            newOption.textContent = this.data[i].name;
            this.dropDownId.appendChild(newOption);
            
        }

        //acquires whatever save object was selected when the dropdown component is changed
        //please refer to js/functions.js, getPresetByName for how this function works
        this.dropDownId.addEventListener('change', () => {
            this.onSelect(getPresetByName(this.data, this.dropDownId.value));

            
        });
    }
    
    renderSaves() {
        const dom = dropDownTemplate.cloneNode(true);
        this.dropDownId = dom.querySelector('select');

        //loads saves at the start and is used to update saves when they are created/cleared
        this.updateSaves(this.data);

        this.saveButton.addEventListener('click', () => {
            this.updateSaves(this.data);
        });

        this.clearButton.addEventListener('click', () => {
            this.clearSaves(this.data);

        });





        return dom;
    }
}