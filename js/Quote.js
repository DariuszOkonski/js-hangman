const quotes = [
    {id: 1, content: 'ogniem i mieczem', category: 'film' },
    {id: 2, content: 'komu w drogę temu czas', category: 'przysłowie' },
    {id: 3, content: 'janko muzykant', category: 'utwór literacki' },
]

class Quote {
    constructor(spanText, spanCategory) {
        this.spanText = spanText;
        this.spanCategory = spanCategory;
        this.text = quotes[Math.floor(Math.random() * quotes.length)];
        this.hiddenText = "";
        this.counter = 0;
    }

    createQuote() {
        console.log('render quote');
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
        this.counter++;

        for (let i = 0; i < this.text.content.length; i++) {
            if(this.text.content[i] === letter) {
                hiddenArray[i] = letter;
                this.counter--;
            }          
        }

        console.log(this.counter);

        this.hiddenText = hiddenArray.join("");
        this.spanText.innerText = this.hiddenText;
    }
}

export default Quote;