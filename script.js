const startBtn = document.querySelector('#startBtn')
const letterBtns = document.querySelectorAll('.letterBtns')
const roundDisplay = document.querySelector('.roundDisplay')
let wordDisplay = document.querySelector('.wordDisplay')
const input = document.querySelector('input')
//
const wordBank = ['Cat', 'Puppy', 'Deer']
let displayed = ''
let incorrect = 0
let clickedLetters = []

//store letters clicked in an array, filter through words length and compare against guessed letters array..if not true..decrement guess counter..
//if true..display all occurances of letter on page

const randomWord = () => {
  displayed = wordBank[Math.floor(Math.random() * wordBank.length)]
  console.log(displayed)
}
//
letterBtns.forEach((button) => {
  button.onclick = () => {
    button.disabled = true
    clickedLetters.push(button.value)
    displayHidden()
    console.log(clickedLetters)
  }
})
//
const displayHidden = () => {
  wordDisplay = displayed.split('').map(letter => (clickedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join('')
  document.querySelector('#wordDisplay').innerHTML = wordDisplay
}
//

//



//

randomWord()
displayHidden()

/*Re-theme hangman, as "Shark Eat Fish"
-store words in an array that will be randomly selected to play (math.floor(math.random))✅
-display word as dashes corresponding with the word length on the page, or be unveiled instead✅
-display each letter of alphabet to be clickable, when chosen, disable that letter✅
-display amount of guesses allowed, that counts down when its incorrect (store incorrect guesses in array that holds a max amount, if its maxed..you lose)
-make a start button
-make a restart button
-as you guess incorrectly the smallest fish to biggest fish disappear, final image will be a shark coming at you with a restart button
-when you restart a new word to guess is selected
-when you guess a letter right, cycle through the word to find that letter and display all occurrences of that letter
-when you win, it automatically goes to a new word possibllyy?
*/
