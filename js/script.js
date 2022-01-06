/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array
***/

var quotes = [

  {
    quote: 'My bounce-around life had taught me that dreams were dangerous things - they look solid in your mind, but you just try to reach for them. It`s like gathering clouds.',
    source: 'Kirby Larson',
    citation: 'Hattie Big Sky',
    year: 2006,
    tag: 'tags: dreams, life lessons'
  },


  {
    quote: 'In order to truly give to others, you have to give to yourself first.',
    source: 'Ali Vincent',
    citation: 'Believe It, Be It: How Being the Biggest Loser Won Me Back My Life',
    year: 2009,
    tag: 'tags: life, giving'
  },


  {
    quote: 'It hurts to find out that what you wanted doesn`t match what you dreamed it would be.',
    source: 'Randy K. Milholland',
    tag: 'tags: hurt, dreams'
  },

  {
    quote: 'Money doesn`t always bring happiness. People with ten million dollars are no happier than people with nine million dollars.',
    source: 'Hobart Brown',
    tag: 'tags: money, happines'

  },

  {
    quote: 'The best doctor in the world is the veterinarian. He can`t ask his patients what is the matter-he`s got to just know.',
    source: 'Will Rogers',
    tag: 'tags: doctors'
  }


];


/***
 * `getRandomQuote` function will select a quote above at random
***/

function getRandomQuote() {

  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
};

// console.log(getRandomQuote());

/***
 * `printQuote` function will call the getrandomQuote function and update the htm to display the quote
***/

function printQuote() {

  let chosenQuote = getRandomQuote();
  let html =
    `<p class="quote"> ${chosenQuote.quote}</p>
     <p class="source">${chosenQuote.source}
     `
  if (chosenQuote.hasOwnProperty('citation')) {
    html += `<span class="citation"> ${chosenQuote.citation} </span>`
  }
  if (chosenQuote.hasOwnProperty('year')) {
    html += `<span class="year"> ${chosenQuote.year} </span>`
  }
  if (chosenQuote.hasOwnProperty('tag')) {
    html += `<span class="tag"> ${chosenQuote.tag} </span>`
  }



  html += `</p>`
  return document.getElementById('quote-box').innerHTML = html;

};

/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * when a new quote prints to the page, the background color changes to a random color.
***/

function updateBackgroundColor() {

  let colors = ['#6495ED', '#008B8B', '#8B008B'];
  let random = Math.floor(Math.random() * colors.length);
  let randomColor = colors[random];

  document.body.style.background = randomColor;

};

document.getElementById('load-quote').addEventListener("click", updateBackgroundColor);

/***
 * the quote on the page automatically updates at regular intervals.
***/

function setTimer() {

  printQuote();
  updateBackgroundColor();

};

setInterval(setTimer, 3000);
