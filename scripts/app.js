console.log("app is working");
const getElement = (id) => {
  return document.getElementById(id);
};

const handleKeyboardButtonPress = (event) => {
  const presedKey = event.key;
  const haveToPress = getElement("letter-element").innerText.toLowerCase();

  if (haveToPress === presedKey) {
    console.log("key matched");
    getElement(haveToPress).classList.remove("bg-pink-400");
    getElement("score").innerText = parseInt(getElement("score").innerText) + 1;
    continueGame();
  } else {
    if (parseInt(getElement("life").innerText) > 0) {
      console.error("not mathched");
      getElement("life").innerText = parseInt(getElement("life").innerText) - 1;
    }
    else {
      getElement(haveToPress).classList.remove("bg-pink-400");
      showElementByID("final-score");
      hideElementByID("play-ground");
      getElement("final-score-element").innerText =getElement("score").innerText;
      
      resetScores();
    }
  }
};

document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  let randomLetter = getRandomAlphabet();
  const letterShowingElement = document.getElementById("letter-element");
  letterShowingElement.innerText = randomLetter;
  getElement(randomLetter).classList.add("bg-pink-400");
}

function play() {
  //
  hideElementByID("home");
  hideElementByID("final-score");
  showElementByID("play-ground");
  continueGame();
}

const resetScores = () => {
  getElement("life").innerText = 5;
  getElement("score").innerText = 0;
};
// buttons clicked  here
document.getElementById("play-button").addEventListener("click", () => {
  play();
});
