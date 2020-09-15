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
            button.addEventListener('click', this.pressButton);
            this.buttons.appendChild(button);
        }

        this.reset.addEventListener('click', this.pressReset);
    }

    pressButton() {
        // this.disabled = true;
        // this.letter = this.innerText;
        // console.log(this.letter);
        console.log(this)
    }

    pressReset() {
        window.location.reload();
    }
}

export default Buttons;