class Buttons {
    constructor(buttons, reset, quote) {
        this.buttons = buttons;
        this.reset = reset;
        this.letter = "";
        this.quote = quote;
    }

    createButtons() {
        for (let i = 0; i < 26; i++) {
            const button = document.createElement('button')
            button.innerText = String.fromCharCode(i + 97);
            // button.addEventListener('click', this.pressButton);
            button.addEventListener('click', (e) => this.pressButton(e));
            this.buttons.appendChild(button);
        }

        this.reset.addEventListener('click', this.pressReset);
    }

    // e.target - reference to button
    // this - reference to object Buttons
    pressButton(e) {
        e.target.disabled = true;
        this.letter = e.target.innerText;
        this.quote.checkQuote(this.letter);
    }

    pressReset() {
        window.location.reload();
    }
}

export default Buttons;