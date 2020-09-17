import Buttons from './Buttons.js';
import Quote from './Quote.js';

class Game {
    constructor(domElements) {
        this.quote = new Quote(domElements.spanText, domElements.spanCategory, domElements.imagesContainer, domElements.buttonsText);
        this.buttons = new Buttons(domElements.buttonsText, domElements.buttonReset, this.quote);
    }

    start() {
        this.buttons.createButtons();
        this.quote.createQuote();
    }
}

export default Game;