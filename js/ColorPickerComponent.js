'use strict';
/* globals */
/* exported ColorPicker */

const colorPickerTemplate = document.getElementById('color-picker-template').content;

class ColorPicker {
    constructor(label, id, onPick) {
        this.label = label;
        this.id = id;
        this.onPick = onPick;
    }

    update() {
        
    }

    render(){
        const dom = colorPickerTemplate.cloneNode(true);

        const container = dom.querySelector('div');
        const colorPickerName = container.querySelector('span');
        colorPickerName.textContent = this.label;
        
        const colorPicker = container.querySelector('input');
        colorPicker.addEventListener('change', () => {
            this.onPick(colorPicker.value);
        });
        colorPicker.setAttribute('id', this.id);

        return dom;
    }
}