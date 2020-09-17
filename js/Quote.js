import { getQuote } from './quotes.js';

const gameEnd = 7;

class Quote {
    constructor(spanText, spanCategory, imagesContainer, btnText) {
        this.spanText = spanText;
        this.spanCategory = spanCategory;
        this.btnText = btnText;
        this.imagesContainer = imagesContainer;
        this.text = getQuote();
        this.hiddenText = "";
        this.counter = 0;
    }

    createQuote() {
        this.spanText.innerText = this.hideQuote();
        this.spanCategory.innerText = this.text.category;
    }

    hideQuote() {        
        for (let i = 0; i < this.text.content.length; i++) {
            if(this.text.content[i] !== " ") {
                this.hiddenText += "_";
            } else {
                this.hiddenText += " ";
            }
        }       
        return this.hiddenText;
    }

    checkQuote(letter) {
        let hiddenArray = this.hiddenText.split("");
        let foundLetter = false;

        for (let i = 0; i < this.text.content.length; i++) {
            if(this.text.content[i] === letter) {
                hiddenArray[i] = letter;
                foundLetter = true;
            }          
        }
        this.hiddenText = hiddenArray.join("");
        this.spanText.innerText = this.hiddenText;
        return foundLetter;
    }

    checkCounter(isIncreased) {
        if(!isIncreased) {
            this.counter++;
            this.changeImage(this.counter);
        } 
    }

    changeImage(counter) {
        this.imagesContainer.children[counter].classList.add('show');
    }

    checkEndGame() {

        if(this.text.content === this.hiddenText) {
            console.log("WIN GAME");
            this.winGame();
        }

        if(this.counter === gameEnd) {
            console.log("LOST GAME");
            this.loseGame();
        }
    }

    winGame() {
        this.spanCategory.style.color = "green";
        this.spanCategory.style.fontSize = "1.8rem";
        this.spanCategory.innerText = "Congratulation!!!\nYou Win the Game!!!";
        this.hideTextButtons();
    }

    loseGame() {
        this.spanCategory.style.color = "red";
        this.spanCategory.style.fontSize = "1.8rem";
        this.spanCategory.innerText = `You Lost!!!\nAnswer: ${this.text.content}`;
        this.hideTextButtons();
    }

    hideTextButtons() {
        this.btnText.style.display = "none";
    }
}

export default Quote;