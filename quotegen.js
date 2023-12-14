const arrayOfQuotes = [
    {'author': 'Marcus aurelieus', 
     'quote': 'Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.'
    },
    
    {'author': 'Epictetus', 
     'quote': 'Wealth consists not in having great possessions, but in having few wants.'
    },

    {'author': 'Fyodor Dostoevsky', 
     'quote': 'Taking a new step, uttering a new word, is what people fear most.'
    },

    {'author': 'J. Robert Oppenheimer', 
     'quote': 'Knowledge cannot be pursued without morality.'
    },

    {'author': 'Friedrich Nietzsche', 
     'quote': 'You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.'
    },
    {'author': 'Muhammad Ali', 
     'quote': 'Dont count the days, make the days count.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteoutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authoroutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}