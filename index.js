(function () {
  const check = document.querySelector('.check');
  const again = document.querySelector('.again');
  const score = document.querySelector('.score');
  const highscore = document.querySelector('.highscore');
  const body = document.body;
  let currentNumber = Math.floor(Math.random() * 20) + 1;
  let currentScore = 20;
  let currentHightScore = 0;

  const displayMessage = val => {
    const message = document.querySelector('.message');
    message.textContent = val;
  };

  const displayNumber = (message, width) => {
    const number = document.querySelector('.number');
    number.textContent = message;
    number.style.width = width;
  };

  const minusScore = () => {
    currentScore--;
    score.textContent = currentScore;
    if (currentScore === 0) {
      displayMessage('You lost the game');
      check.setAttribute('disabled', 'disabled');
      document.body.style.backgroundColor = 'red';
    }
  };

  check.addEventListener('click', () => {
    let guess = +document.querySelector('.guess').value;
    if (!guess) {
      displayMessage("it isn't number");
    } else if (guess === currentNumber) {
      displayMessage("👍it's correct number");
      displayNumber(currentNumber, '30rem');
      body.style.backgroundColor = '#60b347';

      if (currentScore > currentHightScore) {
        currentHightScore = currentScore;
        highscore.textContent = currentHightScore;
      }
    } else if (guess < currentNumber) {
      displayMessage('📉Too low');
      minusScore();
    } else if (guess > currentNumber) {
      displayMessage('📈Too hight');
      minusScore();
    }
  });

  again.addEventListener('click', () => {
    currentNumber = Math.floor(Math.random() * 20) + 1;
    let guess = document.querySelector('.guess');
    guess.value = '';
    currentScore = 20;
    score.textContent = currentScore;
    body.style.backgroundColor = '#222';
    displayNumber('?', '15rem');
    displayMessage('Start guessing...');
    guess.value = '';
  });
})();
