const number = document.querySelector('.number');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const score = document.querySelector('.score');
const message = document.querySelector('.message');
let currentNumber = Math.floor(Math.random() * 20) + 1;
const body = document.body;
let currentScore = 20;
let currentHightScore = 0;
console.log(currentNumber);

const minusScore = () => {
  currentScore--;
  score.textContent = currentScore;
  if (currentScore === 0) {
    message.textContent = 'You lost the game';
    check.setAttribute('disabled', 'disabled');
    document.body.style.backgroundColor = 'red';
  }
};

check.addEventListener('click', () => {
  let guess = +document.querySelector('.guess').value;

  if (!guess) {
    message.textContent = "it isn't number";
  } else if (guess === currentNumber) {
    message.textContent = "it's correct number";
    number.textContent = currentNumber;
    number.style.width = '30rem';
    body.style.backgroundColor = '#60b347';
    if (currentScore > currentHightScore) {
      currentHightScore = currentScore;
      const highscore = document.querySelector('.highscore');
      highscore.textContent = currentHightScore;
    }
  } else if (guess < currentNumber) {
    message.textContent = 'Too low';
    minusScore();
  } else if (guess > currentNumber) {
    message.textContent = 'Too hight';
    minusScore();
  }
  guess = '';
});

again.addEventListener('click', () => {
  currentNumber = Math.floor(Math.random() * 20) + 1;
  console.log(currentNumber);
  let guess = document.querySelector('.guess');
  guess.value = '';
  currentScore = 20;
  score.textContent = currentScore;
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  guess.value = '';
});
