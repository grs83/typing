var index = 0;
var SetNewCurrent = "";

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
var [previous, current, next] = threeLetters(index, letters);

$previousLetter = document.querySelector("#letter-previous");
$requiredLetter = document.querySelector("#letter-required");
$nextLetter = document.querySelector("#letter-next");
$requiredLetter.textContent = current;
$nextLetter.textContent = next;
var SetNewCurrent = current;

function changeLetters() {
  var [previous, current, next] = threeLetters(index, letters);
  SetNewCurrent = current;
  var animationDelay = false;
  if (animationDelay === true) {
    $previousLetter.textContent = previous;
    $requiredLetter.textContent = current;
    $nextLetter.textContent = next;
  } else {
    setTimeout(function() {
      $previousLetter.textContent = previous;
      $requiredLetter.textContent = current;
      $nextLetter.textContent = next;
      animationDelay = true;
    }, 100);
  }
}

$inputText = document.querySelector("#input-text");
$wrongAnswerRed = document.querySelector(".if-wrong");

function toggleAnimation() {
  $fadeLeftAnimation = document.querySelectorAll(".fadeInRight");
  $fadeLeftAnimation[0].classList.toggle("fadeOutRight");
  $fadeLeftAnimation[1].classList.toggle("fadeOutRight");
  $fadeLeftAnimation[2].classList.toggle("fadeOutRight");
}

var seconds = 0;

function displayTime(seconds) {
  var calcMin = Math.floor(seconds / 60);
  if (calcMin < 10) {
    calcMin = "0" + calcMin;
  }
  var calcSeconds = Math.floor(seconds - calcMin * 60);
  if (calcSeconds < 10) {
    calcSeconds = "0" + calcSeconds;
  }
  var time = calcMin + ":" + calcSeconds;
  return time;
}

function updateTimerDisplay() {
  $timer = document.querySelector("#stats__time");
  $timer.textContent = displayTime(seconds);
}

var intervalInProgress = false;

function timer() {
  if (intervalInProgress === false) {
    intervalInProgress = true;
    intervalID = setInterval(function() {
      seconds++;
      updateTimerDisplay();
    }, 1000);
  }
}

var rightAnswers = 0;
var wrongAnswers = 0;

function findPercentage() {
  $percent = document.querySelector("#stats__percentage");
  var percent = Math.floor(100 * rightAnswers / (rightAnswers + wrongAnswers));
  $percent.textContent = percent + "%";
  return percent;
}

function wordsPerMin() {
  var wpm = Math.floor(20 / (seconds / 60));
  return wpm;
}

function resetSettings() {
  index = 0;
  seconds = 0;
  intervalInProgress = false;
  rightAnswers = 0;
  wrongAnswers = 0;
  $inputText.value = "";
  $wrongAnswerRed.classList.remove("red");
  findPercentage();
  $timer.textContent = "00:00";
  $previousLetter.textContent = "";
}

function checkInput(current, key) {
  if (index === 98) {
    clearInterval(intervalID);
    alert(
      "Congrats! You finished in " +
        displayTime(seconds) +
        " second's. That's " +
        wordsPerMin() +
        " words per minute with an accuracy of " +
        findPercentage() +
        "%!"
    );
    resetSettings();
  }
  if (current === key) {
    rightAnswers++;
    index++;
    changeLetters();
    toggleAnimation();
    findPercentage();
    $wrongAnswerRed.classList.remove("red");
  } else {
    wrongAnswers++;
    index++;
    changeLetters();
    toggleAnimation();
    findPercentage();
    $wrongAnswerRed.classList.add("red");
  }
}

$inputText.addEventListener("keypress", event => {
  var keyName = event.key;
  $inputText.value = "";
  timer();
  checkInput(SetNewCurrent, keyName);
});
