

const effectsTemplate = document.getElementById('effects-template').content;

class EffectToApply {

    constructor(effect) {
        this.effect = effect;
        this.onSelect;
    }

    render() {

        const dom = effectsTemplate;

        this.container = dom.querySelector('div');
        const chosenEffect = this.container.querySelector('option');
        chosenEffect.addEventListener('select', () => {
            let selectedEffect = document.getElementById('dropdown').value;
            let headerElement = document.getElementById('sample-header');
            headerElement.setAttribute("class", selectedEffect);
        });

        return dom;


    }
}