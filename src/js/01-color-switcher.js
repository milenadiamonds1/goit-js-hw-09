
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body')

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

let timerId = null;

function onStart(){
    startBtn.disabled = true;
    stopBtn.disabled = false;
    body.style.backgroundColor = getRandomHexColor();
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
}
function onStop(){
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timerId);
  }

