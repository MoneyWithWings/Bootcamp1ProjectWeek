'use strict';
/* globals */
/* exported ColorPicker */

const colorPickerTemplate = document.getElementById('color-picker-template').content;

class ColorPicker {
    constructor(label, onPick) {
        this.label = label;
        this.onPick = onPick;
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
        

        return dom;
    }
}