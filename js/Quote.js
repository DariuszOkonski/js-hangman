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
    }

    createQuote() {
        console.log('render quote');
        this.spanText.innerText = this.text.content;
        this.spanCategory.innerText = this.text.category;
    }
}

export default Quote;