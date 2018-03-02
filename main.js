$previus_letter = document.querySelector("#letter__previous");
$required_letter = document.querySelector("#letter__required");
$next_letter = document.querySelector("#letter__next");
$input_text = document.querySelector("#input__text");

var multipleLettersArray = [];
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
    multipleLettersArray.push(randomizeLetterArray());
  }
}

randomizeLetterArray();
createMultipleLettersArray();

var completedLettersArray = _.flatten(multipleLettersArray);

function displayLetters(index) {
  var letters = completedLettersArray.slice(index, index + 3);
  return letters;
}

var letterArray = displayLetters(arrayDisplayIndex);
$previus_letter.textContent = letterArray[0];
$required_letter.textContent = letterArray[1];
$next_letter.textContent = letterArray[2];
