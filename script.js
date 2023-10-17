
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').innerText = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStop').innerText = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    document.getElementById('startStop').innerText = 'Start';
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('display').innerText = '00:00:00';
}

function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    const display = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('display').innerText = display;
}

document.getElementById('startStop').addEventListener('click', startStop);
document.getElementById('reset').addEventListener('click', reset);


let timer;
let isRunning = false;

function startTimer() {
    if (isRunning) return;

    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds <= 0) return;

    let remainingSeconds = totalSeconds;
    updateDisplay(remainingSeconds);

    timer = setInterval(function () {
        remainingSeconds--;
        updateDisplay(remainingSeconds);
        if (remainingSeconds <= 0) {
            clearInterval(timer);
            isRunning = false;
        }
    }, 1000);

    isRunning = true;
}

function updateDisplay(totalSeconds) {
    const display = new Date(totalSeconds * 1000).toISOString().substr(11, 8);
    document.getElementById('display').innerText = display;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('display').innerText = '00:00:00';
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
