const $startBtn = document.querySelector('#start'); // $ - style guide. If this variable is a node element
const $gameField = document.querySelector('#game');

let score = 0;

$startBtn.addEventListener('click', startGame);
$gameField.addEventListener('click', handleBoxClick);

function startGame() {
   $startBtn.classList.add('hide');
   $gameField.classList.add('started');
   generateBox();
}

function handleBoxClick(event) {
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
    box.style.backgroundColor = generateColorCSSTricks();
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