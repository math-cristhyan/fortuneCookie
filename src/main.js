const fortuneCookie = document.querySelector('.handleClick');
const initialScreen = document.querySelector('.screen1');
const luckScreen = document.querySelector('.screen2');
const restartButton = document.querySelector('button');
const luckPhrase = document.querySelector('.luck');

const allPhrases = ["Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.", " Você vai ter um grande dia.", "Você vai se tornar um grande desenvolvedor"];

fortuneCookie.addEventListener('click', (e) => {
  toggleDisplay();
  shortPhrase();
});

restartButton.addEventListener('click', (e)=> {
  toggleDisplay();
});


function shortPhrase() {
  let index = getRandomArbitrary(0, allPhrases.length);
  luckPhrase.textContent = allPhrases[index];
}

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

function toggleDisplay() {
  initialScreen.classList.toggle('hide');
  luckScreen.classList.toggle('hide');
}
