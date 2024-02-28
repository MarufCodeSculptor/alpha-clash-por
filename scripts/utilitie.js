console.log("ulitilies working");

const hideElementByID = (id) => {
  document.getElementById(id).classList.add("hidden");
};
const showElementByID = (id) => {
  document.getElementById(id).classList.remove("hidden");
};

const getRandomAlphabet = () => {
  let randomNumber = Math.random() * 25;
  let randomNumberRounded = Math.round(randomNumber);
  const alphabetSrtring = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetSrtring.split("");
  return alphabets[randomNumberRounded];
};


