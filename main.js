$required_letter = document.querySelector("#letter__required");
$next_letter = document.querySelector("#letter__next");
$input_text = document.querySelector("#input__text");

var displayLettersArray = [];
var arrayDisplayIndex = 0;

function randomizeLetterArray() {
  var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  var randomLetters = _.shuffle(letters);
  return randomLetters;
}

function createMultipleLettersArray() {
  for (var i = 0; i < 3; i++) {
    displayLettersArray.push(randomizeLetterArray());
  }
}

function displayLetters(index) {
  var letters = displayLettersArray.slice(index, index + 3);
  return letters;
}

var letterArray = displayLetters(arrayDisplayIndex);
$next_letter.textContent = letterArray[2];
$required_letter.textContent = letterArray[1];

console.log(
  randomizeLetterArray(),
  createMultipleLettersArray(),
  displayLettersArray
);
