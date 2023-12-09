function countdown() {
    // Set the date for the advising start day
    const advisingStartDay = new Date("2023-12-01"); // Update this date accordingly

    // Calculate one day before the advising start day
    const dayBeforeAdvisingStart = new Date(advisingStartDay.getTime() - (24 * 60 * 60 * 1000));

    // Update the countdown every 1 second
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = dayBeforeAdvisingStart - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // If the countdown is finished
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "The Advising period has not started yet!";
        }
    }, 1000);
}

// Start the countdown
countdown();
