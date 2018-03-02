function randomizeLetters(length) {
  var alphabet = [
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
  var randomLetters = [];

  while (randomLetters.length < length) {
    randomLetters = randomLetters.concat(_.shuffle(alphabet));
  }

  return randomLetters.slice(0, length);
}

function threeLetters(index, letters) {
  return letters.slice(index, index + 3);
}

var letters = randomizeLetters(100);
var [previous, current, next] = threeLetters(6, letters);

$previousLetter = document.querySelector("#letter-previous");
$previousLetter.textContent = previous;

$requiredLetter = document.querySelector("#letter-required");
$requiredLetter.textContent = current;

$nextLetter = document.querySelector("#letter-next");
$nextLetter.textContent = next;

$inputText = document.querySelector("#input-text");
