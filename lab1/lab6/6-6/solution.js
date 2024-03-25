function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', convertDays);
    hoursBtn.addEventListener('click', convertHours);
    minutesBtn.addEventListener('click', convertMinutes);
    secondsBtn.addEventListener('click', convertSeconds);
}

function convertDays() {
    const daysInput = document.getElementById('days');
    const days = parseFloat(daysInput.value);

    const hours = days * 24;
    const minutes = hours * 60;
    const seconds = minutes * 60;

    document.getElementById('hours').value = hours;
    document.getElementById('minutes').value = minutes;
    document.getElementById('seconds').value = seconds;
}

function convertHours() {
    const hoursInput = document.getElementById('hours');
    const hours = parseFloat(hoursInput.value);

    const days = hours / 24;
    const minutes = hours * 60;
    const seconds = minutes * 60;

    document.getElementById('days').value = days;
    document.getElementById('minutes').value = minutes;
    document.getElementById('seconds').value = seconds;
}

function convertMinutes() {
    const minutesInput = document.getElementById('minutes');
    const minutes = parseFloat(minutesInput.value);

    const hours = minutes / 60;
    const days = hours / 24;
    const seconds = minutes * 60;

    document.getElementById('days').value = days;
    document.getElementById('hours').value = hours;
    document.getElementById('seconds').value = seconds;
}

function convertSeconds() {
    const secondsInput = document.getElementById('seconds');
    const seconds = parseFloat(secondsInput.value);

    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    document.getElementById('days').value = days;
    document.getElementById('hours').value = hours;
    document.getElementById('minutes').value = minutes;
}