import Buttons from './Buttons.js';

class Game {
    constructor(domElements) {
        this.buttons = new Buttons(domElements.buttonsText, domElements.buttonReset);
    }

    start() {
        this.buttons.createButtons();
    }
}

export default Game;