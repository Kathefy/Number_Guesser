let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

const game = document.querySelector("#game"),
      minNum = document.querySelector(".minNum"),
      maxNum = document.querySelector(".maxNum"),
      guessBtn = document.querySelector("#submit"),
      guessInput = document.querySelector("#guessNumber"),
      msg = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

