import Game from './Game.js';

const domElements = {
    buttonsText: document.querySelector('[data-buttons-text]'),
}

const game = new Game(domElements);
console.clear();
console.log(game);

game.start();