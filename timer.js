const timerContainer = document.getElementById('timer-container');
const timerElement = document.getElementById('timer');
const durationInput = document.getElementById('duration');
const startButton = document.getElementById('start');
let countdown;

function startCountdown(duration) {
    clearInterval(countdown);
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    updateTimer(endTime - Date.now());

    countdown = setInterval(() => {
        const timeLeft = endTime - Date.now();
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerElement.textContent = '00:00';
            return;
        }
        updateTimer(timeLeft);
    }, 1000);
}

// Function to update the timer
function updateTimer(timeLeft) {
    const minutes = Math.floor(timeLeft / 60000);
    const seconds = ((timeLeft % 60000) / 1000).toFixed(0);
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Event listener for the "Start" button
startButton.addEventListener('click', () => {
    const duration = parseInt(durationInput.value);
    if (duration > 0) {
        startCountdown(duration);
    }
});

// Animation effect when the user hovers over the timer container
timerContainer.addEventListener('mouseover', () => {
    timerContainer.style.transform = 'scale(1.05)';
});

timerContainer.addEventListener('mouseout', () => {
    timerContainer.style.transform = 'scale(1)';
});
