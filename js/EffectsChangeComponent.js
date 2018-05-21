

const effectsTemplate = document.getElementById('dropdown-template').content;

class EffectToApply {

    constructor(effect) {
        this.effect = effect;
    }

    render() {

        const dom = effectsTemplate;

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