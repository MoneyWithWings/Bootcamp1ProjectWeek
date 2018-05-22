const colorPickerTemplate = document.getElementById('color-picker-template').content;

class ColorPicker {
    constructor(label, id) {
        this.label = label;
        this.id = id;
    }

    render(){
        const dom = colorPickerTemplate.cloneNode(true);

        const container = dom.querySelector('div');
        console.log(container);
        const colorPickerName = container.querySelector('span');
        colorPickerName.textContent = this.label;
        
        const colorPickerForm = container.querySelector('input');
        colorPickerForm.setAttribute('id', this.id);


       //console.log(colorPickerForm);
        // colorPickerForm.forEach(test => {
        //     console.log(test);
        //     colorPickerForm.id = 'input-0';
        // });
        // for(let i = 0; i < 3; i++){
        //     colorPickerForm.setAttribute('id', 'input-' + i);
        // }
        

        return dom;
    }
}