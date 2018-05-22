const appTemplate = document.getElementById('app-template').content;

class App {

    constructor() {

    }
    // let selectedValue = document.getElementById('effects-dropdown').value;
    // console.log(selectedValue);

    render(){
        const dom = appTemplate;
        
        const displayBackgroundColorPicker = dom.getElementById('background-color-picker');
        const displayBackgroundColorPickerComponent = new ColorPicker('Background', 'bgColor');
        const displayBGDom = displayBackgroundColorPickerComponent.render();
        displayBackgroundColorPicker.appendChild(displayBGDom);

        const displayTextColorPicker = dom.getElementById('text-color-picker');
        const displayTextColorPickerComponent = new ColorPicker('Text', 'textColor');
        const displayTDom = displayTextColorPickerComponent.render();
        displayTextColorPicker.appendChild(displayTDom);

        const displayHeaderColorPicker = dom.getElementById('header-color-picker');
        const displayHeaderColorPickerComponent = new ColorPicker('header', 'headerColor');
        const displayHeaderDom = displayHeaderColorPickerComponent.render();
        displayHeaderColorPicker.appendChild(displayHeaderDom);

        const backgroundColor = dom.getElementById('bgColor');
        dom.getElementById('bgColor').addEventListener('change', () => {
            let colorStart = document.getElementById('background-color-picker');
            console.log('background color');
            let colorContainer = colorStart.querySelector('div');
            let colorValue = colorContainer.querySelector('input').value;
            
            document.querySelector('body').style.backgroundColor = '#' + colorValue + '';
        });
        const textColor = dom.getElementById('textColor');
        console.log(textColor);
        
        dom.getElementById('textColor').addEventListener('change', () => {
            let colorStart = document.getElementById('text-color-picker');
            console.log('text color');
            let colorContainer = colorStart.querySelector('div');
            let colorValue = colorContainer.querySelector('input').value;
        
            document.getElementById('alter-text').style.color = '#' + colorValue + '';
        });

        dom.getElementById('headerColor').addEventListener('change', () => {
            let colorStart = document.getElementById('header-color-picker');
            let colorContainer = colorStart.querySelector('div');
            let colorValue = colorContainer.querySelector('input').value;
            
            document.getElementById('alter-header').style.color = '#' + colorValue + '';
        });

        // const displayDropdown = dom.getElementById('display-dropdown');
        // const displayDropdownComponent = new EffectToApply();
        // const selectorDom = displayDropdownComponent.render();
        // displayDropdown.appendChild(selectorDom);


        return dom;
    }
}