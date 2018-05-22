const colorPickerTemplate = document.getElementById('color-picker-template').content;

class ColorPicker {
    constructor(label) {
        this.label = label;

    }

    render(){
        const dom = colorPickerTemplate.cloneNode(true);

        const container = dom.querySelector('div');
        console.log(container)
        const colorPickerName = container.querySelector('span');
        colorPickerName.textContent = this.label;

        const colorPickerForm = container.querySelector('input');


        return dom;
    }
}