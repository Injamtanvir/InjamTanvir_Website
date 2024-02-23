document.addEventListener("DOMContentLoaded", function() {
    const targetDate = new Date("June 1, 2024 00:00:00").getTime();

    const timerInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeleft = targetDate - now;

        const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        if (timeleft < 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").innerHTML = "Countdown finished!";
        }
    }, 1000);
});
