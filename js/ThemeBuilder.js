const appTemplate = document.getElementById('app-template').content;

class App {

    constructor() {

    }
    // let selectedValue = document.getElementById('effects-dropdown').value;
    // console.log(selectedValue);

    render(){
        const dom = appTemplate;
        
        const displayBackgroundColorPicker = dom.getElementById('background-color-picker');
        const displayBackgroundColorPickerComponent = new ColorPicker();
        const displayBGDom = displayBackgroundColorPickerComponent.render();
        displayBackgroundColorPicker.appendChild(displayBGDom);

        // const displayDropdown = dom.getElementById('display-dropdown');
        // const displayDropdownComponent = new EffectToApply();
        // const selectorDom = displayDropdownComponent.render();
        // displayDropdown.appendChild(selectorDom);


        return dom;
    }
}