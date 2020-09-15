import Game from './Game.js';

const domElements = {
    buttonsText: document.querySelector('[data-buttons-text]'),
    buttonReset: document.querySelector('[data-button-reset]'),
    spanText: document.querySelector('[data-text-content]'),
    spanCategory: document.querySelector('[data-text-category]'),
}

const game = new Game(domElements);
// console.log(game);

game.start();
