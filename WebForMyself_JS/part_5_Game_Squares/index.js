const $startBtn = document.querySelector('#start'); // $ - style guide. If this variable is a node element
const $pauseBtn = document.querySelector('#pause'); 
const $gameField = document.querySelector('#game');
const $time = document.querySelector('#time');
const $score = document.querySelector('#result');
const $timeHeader = document.querySelector('#time-header');
const $resultHeader = document.querySelector('#result-header');
const $gameTime = document.querySelector('#game-time');
const $starTheme = document.querySelector('#star-theme');

let isGameRunning = false;
let score = 0;
let interval;
let starThemeApplied = $starTheme.checked;

$startBtn.addEventListener('click', startGame);
$pauseBtn.addEventListener('click', pauseGame);
$gameField.addEventListener('click', handleBoxClick);
$gameTime.addEventListener('input', setGameTime);
$starTheme.addEventListener('input', () => {
    starThemeApplied = $starTheme.checked;
})

function startGame() {
   score = 0; 
   setGameTime();
   $timeHeader.classList.remove('hide');
   $resultHeader.classList.add('hide');
   isGameRunning = true;
   $startBtn.classList.add('hide');
   $gameField.classList.add('started');
   interval = setInterval(function() {
    let timeLeft = parseFloat($time.textContent);  
    if(timeLeft <= 0) {
        clearInterval(interval); // to stop memory usage
        // The clearInterval() method of the WindowOrWorkerGlobalScope mixin cancels a timed, repeating action 
        // which was previously established by a call to setInterval().
        endGame();
    }
    else {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
        $time.textContent = (timeLeft - 0.1).toFixed(1);
    }
   }, 100)
   generateBox();
}

function pauseGame() {
    isGameRunning = false; 
    
}

function setGameTime() {
    let time = +$gameTime.value; // also we could use parseInt here
    $time.textContent = time.toFixed(1);

}

function setScore() {
    $score.textContent = score.toString();
}

function handleBoxClick(event) {
    if(!isGameRunning) {
        return false
    }
    console.log(event.target.dataset);
    if(event.target.dataset.iAmBox) {
        // alert('box')
        generateBox();
        score++
    }
}

function generateBox() {
    $gameField.innerHTML = ''; // clears field before adding a new box 
    const box = document.createElement('div');
    const boxSide = getRandom(30, 100);
    const gameFieldSize = $gameField.getBoundingClientRect(); // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    // Method returns a DOMRect object providing information about the size of an element and its position relative to the viewport
    const maxXCoordinate = gameFieldSize.height - boxSide; // 300 - (30 ~ 100)
    const maxYCoordinate = gameFieldSize.width - boxSide; //
    console.log(gameFieldSize);
    box.style.height = box.style.width = boxSide + 'px';
    box.style.position = 'absolute';
    if(starThemeApplied){
        box.style.backgroundImage = 'url("./img/star.png")'
        box.style.backgroundSize = (boxSide * 0.96) + 'px';
    }
    else {
        box.style.backgroundColor = generateColorCSSTricks();
    }
    box.style.top = getRandom(0, maxXCoordinate) + 'px';
    box.style.left = getRandom(0, maxYCoordinate) + 'px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-i-am-box', 'true') // I thought we will be calculating coordinates... Do some math. But no
    // more elegant solution is here. Just add attribute 
    // !important. Seems like attribute name should start with 'data'. Because I set it to 'i-am-box', and nothing 
    // worked. :) Found out it

    $gameField.insertAdjacentElement('afterbegin', box);
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min); 
}

// my 20 secs solution :P 
function myGenerateColor() {
    return '#' + getRandom(100, 255) + getRandom(100, 255) + getRandom(100, 255);
}

// https://css-tricks.com/snippets/javascript/random-hex-color/

function generateColorCSSTricks() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}

function endGame() {
    isGameRunning = false;
    setScore();
    $startBtn.classList.remove('hide');
    $gameField.classList.remove('started');
    $gameField.innerHTML = '';
    $timeHeader.classList.add('hide');
    $resultHeader.classList.remove('hide');
}