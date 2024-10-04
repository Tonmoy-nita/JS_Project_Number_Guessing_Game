let randomNumber=Math.round((Math.random()*100)+1)
// console.log(randomNumber);

const submit=document.querySelector('#subt')
let userInput=document.querySelector('#guessField')
// console.log(userInput)
const preGuess=document.querySelector('.guesses')
const remainGuess=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=new Array()
// console.log(prevGuess);
 
let numGuess=1

let playGames=true;

if(playGames)
{
    submit.addEventListener('click',(event)=>{
        event.preventDefault()
        let guess=Number(userInput.value)
        // console.log(guess);
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(guess===''||guess<1||guess>100||isNaN(guess))
    {
        alert('Invalid input')
    }
    else{
        prevGuess.push(guess)
        if(numGuess===10){
            displayGuess(guess)
            displayMessage('Game over. Random number was '+randomNumber)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
        
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage('Congratulations! You guessed the number in '+numGuess+' attempts')
        endGame()
    }
    else if(guess<randomNumber)
    {
        displayMessage('You guess value is lower than actual value')
        
    }
    else
    {
        displayMessage('You guess value is higher than actual value')
        
    }

}
function displayGuess(guess){
    userInput.value = " "
    preGuess.innerHTML +=`${guess}  `
    numGuess +=1
    remainGuess.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}<h2>`
}


function endGame(){
    userInput.value=""
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<button id="newGame" > Start new game</button>'
    startOver.appendChild(p)
    playGames=false
    newGame()
}

function newGame(){
    console.log(document.querySelector('#newGame'))
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(){
        randomNumber=Math.round((Math.random()*100)+1)
        prevGuess=[]
        numGuess=1
        preGuess.innerHTML=""
        remainGuess.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGames=true
    })
}
