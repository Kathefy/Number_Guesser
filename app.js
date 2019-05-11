let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

const game = document.querySelector('#game'),
  minNum = document.querySelector('.minNum'),
  maxNum = document.querySelector('.maxNum'),
  guessBtn = document.querySelector('#submit'),
  guessInput = document.querySelector('#guessNumber'),
  msg = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

//Listen for submit
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter number between ${min} and ${max}`, 'red');
  }

  //Win
  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
    setMessage(`${winningNum} is correct! You win!`, 'green');
  }
});

// Message
function setMessage(text, color) {
  msg.textContent = text;
  msg.style.color = color;
}
