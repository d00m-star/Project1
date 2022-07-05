const startBtn = document.querySelector('#startBtn')
const letterBtns = document.querySelectorAll('.letterBtns')
const winOrLose = document.querySelector('#winLoseDisplay')
const wrongGuess = document.querySelector('#incorrect')
//Getters ^^
let wordStatus = null
const wordBank = ['TERNARY', 'JAVASCRIPT', 'FUNCTION']
let displayed = ''
let incorrect = 6
let clickedLetters = []
let round = 1
//Variables ^^

letterBtns.forEach((button) => {
  button.disabled = true
})
//Start With Disabled Buttons ^^

const randomWord = () => {
  displayed = wordBank[Math.floor(Math.random() * wordBank.length)]
  console.log(displayed)
}
//Random Word Generator ^^

const displayHidden = () => {
  wordStatus = displayed
    .split('')
    .map((letter) => (clickedLetters.indexOf(letter) >= 0 ? letter : ' _ '))
    .join('')

  winOrLose.innerText = wordStatus
}
//Replaces "_" with the letter if it is there ^^

const checkWin = () => {
  if (wordStatus === displayed) {
    winOrLose.innerText = 'YOU WON!'
    letterBtns.forEach((button) => {
      button.disabled = true
    })
  }
}
//Check if player won ^^

const checkLoss = () => {
  if (incorrect === 0) {
    winOrLose.innerText = 'YOU LOST!'
    letterBtns.forEach((button) => {
      button.disabled = true
    })
  }
}
//Check if player lost ^^

const checkIncorrect = (letter) => {
  if (displayed.indexOf(letter) === -1) {
    incorrect -= 1
    wrongGuess.innerText = incorrect
  }
}
//Check if letter is NOT in word ^^

letterBtns.forEach((button) => {
  button.onclick = () => {
    button.disabled = true
    clickedLetters.push(button.value)
    displayHidden()
    checkIncorrect(button.value)
    checkWin()
    checkLoss()
  }
})
//On click of letter buttons, push value, disable button, run check functions ^^

startBtn.onclick = () => {
  letterBtns.forEach((button) => {
    button.disabled = false
    displayed = ''
  })
  startBtn.innerText = 'New Word'
  clickedLetters = []
  incorrect = 6
  wrongGuess.innerText = incorrect
  randomWord()
  displayHidden()
}
//Start button, Reset button ^^

//

//
/*Re-theme hangman, as "Shark Eat Fish"
-store words in an array that will be randomly selected to play (math.floor(math.random))✅
-display word as dashes corresponding with the word length on the page, or be unveiled instead✅
-display each letter of alphabet to be clickable, when chosen, disable that letter✅
-display amount of guesses allowed, that counts down when its incorrect (store incorrect guesses in array that holds a max amount, if its maxed..you lose)✅
-make a start/restart button ✅
-as you guess incorrectly the smallest fish to biggest fish disappear, final image will be a shark coming at you with a restart button
-when you restart a new word to guess is selected✅
-when you guess a letter right, cycle through the word to find that letter and display all occurrences of that letter✅
-when you win, it automatically goes to a new word possibllyy? (just using restart button) ✅
*/
