document.addEventListener("DOMContentLoaded", () => {

const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;
let isRunning = false; // New variable to track if the timer is running

function upDateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2,"0")}`;

    timerEl.innerHTML = formattedTime;
}

function startTimer(){
    if (isRunning) return; // Prevent starting the timer if it's already running

    isRunning = true;  // Mark the timer as running
    startEl.disabled = true;  // Disable the start button to prevent multiple clicks

    interval = setInterval(()=>{
        timeLeft--;
        upDateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500; // Reset time to 1500 seconds (25 minutes)
            isRunning = false;  // Mark the timer as not running
            startEl.disabled = false;  // Re-enable the start button
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(interval);
    isRunning = false;  // Mark the timer as not running
    startEl.disabled = false;  // Re-enable the start button
}

function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    upDateTimer();
    isRunning = false;  // Mark the timer as not running
    startEl.disabled = false;  // Re-enable the start button
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
})