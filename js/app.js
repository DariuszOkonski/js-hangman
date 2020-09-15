import Game from './Game.js';

const domElements = {
    buttonsText: document.querySelector('[data-buttons-text]'),
    buttonReset: document.querySelector('[data-button-reset]'),
}

const game = new Game(domElements);
console.clear();
console.log(game);

game.start();