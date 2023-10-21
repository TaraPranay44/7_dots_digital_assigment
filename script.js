// let time = 60;
// let progress = document.getElementById('progress');
// let minutesElement = document.getElementById('minutes');
// let secondsElement = document.getElementById('seconds');
// let addButton = document.getElementById('add');
// let skipButton = document.getElementById('skip');

// function startTimer() {
//   let interval = setInterval(() => {
//     time--;
//     if (time >= 0) {
//       let minutes = Math.floor(time / 60);
//       let seconds = time % 60;
//       minutesElement.textContent = minutes.toString().padStart(2, '0');
//       secondsElement.textContent = seconds.toString().padStart(2, '0');
//       let progressWidth = (60 - time) / 60 * 100 + '%';
//       progress.style.width = progressWidth;
//     } else {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

// addButton.addEventListener('click', () => {
//   time += 10;
// });

// skipButton.addEventListener('click', () => {
//   clearInterval(startTimer);
// });

// startTimer();
let time = 60;
let progressFill = document.querySelector('.progress-fill');
let minutesElement = document.querySelector('.progress-text');
let secondsElement = document.querySelector('.progress-text');
let addButton = document.getElementById('add');
let skipButton = document.getElementById('skip');

function startTimer() {
    let interval = setInterval(() => {
        time--;
        if (time >= 0) {
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
            let progressOffset = 689 - (689 * (60 - time) / 60);
            progressFill.style.strokeDashoffset = progressOffset;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

addButton.addEventListener('click', () => {
    time += 10;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
});

skipButton.addEventListener('click', () => {
    time = 0;
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    progressFill.style.strokeDashoffset = 689;
});

startTimer();
