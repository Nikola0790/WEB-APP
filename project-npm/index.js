"use strict";

let funnyWords = require("funny-words");
let randomWords = require("random-words");
let oneLinerJoke = require("one-liner-joke");
let figlet = require("figlet");
let cowsay = require("cowsay");
const movieQuote = require("popular-movie-quotes");

/////////////////////////////////////////

let jokes = oneLinerJoke.getRandomJoke();
let randomJoke = (tag) => oneLinerJoke.getRandomJokeWithTag(tag);
let movieQuoteByYear = (startYear, endYear) =>
  movieQuote.getQuoteByYear(startYear, endYear);

/////////////////////////////////////////

console.log(funnyWords("I am very happy"));
console.log(randomWords());
console.log(randomWords(3));
console.log(jokes);
console.log(randomJoke("stupid"));
figlet("Hello World", (err, data) => {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

figlet(
  "Boo!",
  {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);

console.log(
  cowsay.think({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);
console.log(movieQuote.getAll());
console.log(movieQuoteByYear(1991, 1991));
