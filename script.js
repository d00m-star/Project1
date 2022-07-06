// INDEXOF(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

//
const startBtn = document.querySelector('#startBtn')
const letterBtns = document.querySelectorAll('.letterBtns')
const winOrLose = document.querySelector('#winLoseDisplay')
const wrongGuess = document.querySelector('#incorrect')
const allFish = document.querySelectorAll('.fish')
const fish1 = document.querySelector('#fish1')
const fish2 = document.querySelector('#fish2')
const fish3 = document.querySelector('#fish3')
const fish4 = document.querySelector('#fish4')
const fish5 = document.querySelector('#fish5')
const fishBar = document.querySelector('#mistakeFish')
const shark = document.querySelector('#shark')
const yourWordWas = document.querySelector('#yourWordWas')
const sharkBite = document.querySelector('#sharkBite')
//Getters ^^
//
let wordStatus = null
const wordBank = [
  'JAVASCRIPT',
  'FUNCTION',
  'VUE',
  'HTML',
  'CSS',
  'PYTHON',
  'DJANGO',
  'SWITCH',
  'CLASS',
  'MONGO',
  'VARIABLE',
  'METHOD',
  'ARRAY'
]
fish1.innerText = '🐟'
fish2.innerText = '🐟'
fish3.innerText = '🐟'
fish4.innerText = '🐟'
fish5.innerText = '🐟'
let displayed = ''
let incorrect = 6
let clickedLetters = []
//Variables ^^
//
letterBtns.forEach((button) => {
  button.disabled = true
})
//Start With Disabled Buttons ^^
//
const randomWord = () => {
  displayed = wordBank[Math.floor(Math.random() * wordBank.length)]
  console.log(displayed)
}
//Random Word Generator ^^
//
const displayHidden = () => {
  wordStatus = displayed
    .split('')
    .map((letter) => (clickedLetters.indexOf(letter) >= 0 ? letter : ' _ '))
    .join('')

  winOrLose.innerText = wordStatus
}
//Replaces "_" with the letter if it is there ^^
//
const checkWin = () => {
  if (wordStatus === displayed) {
    winOrLose.innerText = 'YOU WON!'
    yourWordWas.innerText = displayed
    letterBtns.forEach((button) => {
      button.disabled = true
    })
  }
}
//Check if player won ^^
//
const checkLoss = () => {
  if (incorrect === 0) {
    winOrLose.innerText = 'YOU LOST!'
    yourWordWas.innerText = displayed
    winOrLose.style.backgroundColor = 'red'
    fishBar.style.backgroundColor = 'red'
    letterBtns.forEach((button) => {
      button.disabled = true
    })
  }
}
//Check if player lost ^^
//
const checkIncorrect = (letter) => {
  if (displayed.indexOf(letter) === -1) {
    incorrect -= 1
    wrongGuess.innerText = incorrect
  }
  if (incorrect === 5) {
    fish1.style.display = 'none'
  } else if (incorrect === 4) {
    fish2.style.display = 'none'
  } else if (incorrect === 3) {
    fish3.style.display = 'none'
  } else if (incorrect === 2) {
    fish4.style.display = 'none'
  } else if (incorrect === 1) {
    fish5.style.display = 'none'
  }
}
//Check if letter is NOT in word ^^
//
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
//
startBtn.onclick = () => {
  letterBtns.forEach((button) => {
    button.disabled = false
    displayed = ''
  })
  winOrLose.style.backgroundColor = 'rgb(0, 132, 255)'
  fishBar.style.backgroundColor = 'rgb(0, 132, 255)'
  startBtn.innerText = 'New Word'
  clickedLetters = []
  yourWordWas.innerText = ''
  fish1.style.display = 'inline'
  fish2.style.display = 'inline'
  fish3.style.display = 'inline'
  fish4.style.display = 'inline'
  fish5.style.display = 'inline'
  incorrect = 6
  wrongGuess.innerText = incorrect
  randomWord()
  displayHidden()
}
