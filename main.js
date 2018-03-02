$required_letter = document.querySelector("#letter__required");
$input_text = document.querySelector("#input__text");

var displayLettersArray = randomizeLetterArray();
var arrayDisplayIndex = 1;

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

function displayLetters(index) {
  var letters = displayLettersArray.slice(index, index + 3);
  return letters;
}

var letterArray = displayLetters(arrayDisplayIndex);
$required_letter.textContent = letterArray[arrayDisplayIndex];
