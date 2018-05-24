'use strict';
/* globals */
/* exported effectsArray fontsArray NewSave saveArray, */

const loadInformation = window.localStorage.getItem('saves');
let saveArray = [];


if(!loadInformation) {
    console.log('nothing found');
} else {
    saveArray = JSON.parse(loadInformation);
}




class NewSave {
    constructor(name, backgroundColor, bodyTextColor, headerTextColor, footerTextColor, headerFont, bodyFont){
        this.name = name;
        this.backgroundColor = backgroundColor;
        this.bodyTextColor = bodyTextColor;
        this.headerTextColor = headerTextColor;
        this.footerTextColor = footerTextColor;
        this.headerFont = headerFont;
        this.bodyFont = bodyFont;
    }
}

const effectsArray = [
    {
        class: '',
        label: 'Select An Effect',
    },
    {
        class: 'Box-Color',
        label: 'Box Color (Hover)',
    },
    {
        class: 'Marshmallow',
        label: 'Marshmallow',
    },
    {
        class: 'Perspective-Rotate',
        label: 'Stretch (Hover)',
    },
    {
        class: 'Perspective-Shift',
        label: 'Perspective Shift',
    },
    {
        class: 'Rotate',
        label: 'Rotate 360',
    },
    {
        class: 'Shadow Elegant',
        label: 'Shadow - Elegant',
    },
    {
        class: 'Shadow DeepShadow',
        label: 'Shadow - Deep',
    },
    {
        class: 'Shadow InsetShadow',
        label: 'Shadow - Inset',
    },
    {
        class: 'Shadow RetroShadow',
        label: 'Shadow - Retro',
    },
    {
        class: 'Skew',
        label: 'Skew',
    },
    {
        class: 'SpinnerY',
        label: 'Spinner Y-axis 360',
    },
    {
        class: 'SpinnerX',
        label: 'Spinner X-axis 360',
    },

];


/* Font usage for Google Fonts
font-family: 'Luckiest Guy', cursive;
font-family: 'Kavivanar', cursive;
font-family: 'Indie Flower', cursive;
font-family: 'Lobster', cursive;
font-family: 'Pacifico', cursive;
font-family: 'Codystar', cursive;
font-family: 'Permanent Marker', cursive;
font-family: 'Monoton', cursive;
font-family: 'Kalam', cursive;
font-family: 'Shadows Into Light Two', cursive; */


const fontsArray = [
    {
        class: '',
        label: 'Select A Font',
    },
    {
        class: 'Luckiest Guy',
        label: 'Luckiest Guy',
    },
    {
        class: 'Kavivanar',
        label: 'Kavivanar',
    },
    {
        class: 'Indie Flower',
        label: 'Indie Flower',
    },
    {
        class: 'Lobster',
        label: 'Lobster',
    },
    {
        class: 'Pacifico',
        label: 'Pacifico',
    },
    {
        class: 'Codystar',
        label: 'Codystar',
    },
    {
        class: 'Permanent Marker',
        label: 'Permanent Marker',
    },
    {
        class: 'Monoton',
        label: 'Monoton',
    },
    {
        class: 'Kalam',
        label: 'Kalam',
    },
    {
        class: 'Shadows Into Light Two',
        label: 'Shadows Into Light',
    },

];