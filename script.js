// allow for clearing interval when resetting timer; otherwise, multiple intervals try to update the timer at once
let timerInterval;

const updateTimerDisplay = (minutes, seconds) => {
    const timer = document.querySelector("#time-left");
    timer.innerHTML = minutes + ":" + seconds.toString().padStart(2, '0');
}

const startTimer = (duration) => {
    updateTimerDisplay(duration / 60, duration % 60);
    timerInterval = setInterval(() => {
        duration--;
        updateTimerDisplay(Math.floor(duration / 60), duration % 60);
    }, 1000);
    setTimeout(() => {
        clearInterval(timerInterval);
    }, duration * 1000);
}

const startStudySession = () => {
    clearInterval(timerInterval);
    startTimer(25 * 60);
    const studyCounter = document.querySelector("#study-count");
    const studyCounterNum = Number(studyCounter.innerHTML);
    studyCounter.innerHTML = studyCounterNum + 1;
}

const startBreakSession = () => {
    clearInterval(timerInterval);
    startTimer(5 * 60);
    const breakCounter = document.querySelector("#break-count");
    const breakCounterNum = Number(breakCounter.innerHTML);
    breakCounter.innerHTML = breakCounterNum + 1;
}

const studyBtn = document.querySelector("#study-btn");
studyBtn.addEventListener("click", startStudySession);

const breakBtn = document.querySelector("#break-btn");
breakBtn.addEventListener("click", startBreakSession);