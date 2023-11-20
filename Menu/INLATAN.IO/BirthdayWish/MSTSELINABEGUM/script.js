document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
    populateGreetings();
});

function startCountdown() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const birthMonth = 4; // November (JavaScript months are 0-based)
    const birthDate = 1;
    let nextBirthday = new Date(currentYear, birthMonth, birthDate);

    // If today's date is past this year's birthday, set the next birthday to next year
    if (today > nextBirthday) {
        nextBirthday = new Date(currentYear + 1, birthMonth, birthDate);
    }

    const countdownElement = document.getElementById('countdown-timer');

    setInterval(() => {
        const currentTime = new Date();
        const diff = nextBirthday - currentTime;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// ... rest of the code remains the same ...


function populateGreetings() {
    const greetings = [
        "Dear MST SELINA BEGUM,",

"On the occasion of your birthday, I extend my warmest wishes for a day filled with joy and a year ahead marked by success and fulfillment. May this special day be a reflection of the remarkable person you are, and may the coming year bring you abundant opportunities for growth and happiness.",

"Happy Birthday!",

"Sincerely,",
"InjamTanvir"
        ];
    const greetingsList = document.getElementById('greetings-list');

    greetings.forEach(message => {
        const listItem = document.createElement('li');
        listItem.innerText = message;
        greetingsList.appendChild(listItem);
    });
}

function changeMessage() {
    const messages = [
        "A gift has been sent to your Bkash account",
        "May your day be filled with joy!",
        "Have a fantastic birthday!",
        "Cheers to another year of happiness!",
        "May all your wishes come true!"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").innerText = messages[randomIndex];
}
