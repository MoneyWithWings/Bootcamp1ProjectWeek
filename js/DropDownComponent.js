'use strict';
/* globals */
/* exported EffectToApply, DropDownMenu*/

const dropDownTemplate = document.getElementById('dropdown-template').content;

class DropDownMenu {

    constructor(data, id, button, onSelect) {
        this.data = data;
        this.id = id;
        this.button = button;
        this.onSelect = onSelect;

    }

    render() {

        const dom = dropDownTemplate.cloneNode(true);
        this.dropDownId = dom.querySelector('select');
        this.dropDownId.addEventListener('change', () => {
            this.onSelect(this.dropDownId.value);
        });
        this.dropDownId.setAttribute('id', this.id);

        for(var i = 0; i < this.data.length; i++) {
            let newOption = document.createElement('option');
            newOption.setAttribute('value', this.data[i].class);
            newOption.textContent = this.data[i].label;
            this.dropDownId.appendChild(newOption);
        }

        return dom;

    }
    
    updateSaves(data) {
        this.data = data;
        
        // const selectedPreset = this.data[i];
        // for(let j = 0;j < this.data.length; j++){
        //     this.dropDownId.lastElementChild.remove();
        // }

        while(this.dropDownId.lastElementChild) {
            this.dropDownId.lastElementChild.remove();
        }
        
        for(var i = 0; i < this.data.length; i++) {
            let newOption = document.createElement('option');
            
            newOption.textContent = this.data[i].name;
            this.dropDownId.appendChild(newOption);
            
        }
        this.dropDownId.addEventListener('change', () => {
            this.onSelect(getPresetByName(this.data, this.dropDownId.value));

            
        });
    }
    
    renderSaves() {
        const dom = dropDownTemplate.cloneNode(true);
        this.dropDownId = dom.querySelector('select');

        // for(let i = 0; i < this.data.length; i++){

        // }

        this.updateSaves(this.data);



        this.button.addEventListener('click', () => {
            this.updateSaves(this.data);
        });



        return dom;
    }
}