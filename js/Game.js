import Buttons from './Buttons.js';

class Game {
    constructor(domElements) {
        this.buttons = new Buttons(domElements.buttonsText);
    }

    start() {
        this.buttons.createButtons();
    }
}

export default Game;