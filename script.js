"use strict";
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const newYears = "1 Jan 2025";
function formatTime(time) {
    return String(time < 10 ? '0' + time : time);
}
function countDown() {
    const currentDate = new Date();
    const newYearsDate = new Date(newYears);
    const totalSeconds = (+newYearsDate - +currentDate) / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);
    daysEl.innerText = formatTime(days);
    hoursEl.innerText = formatTime(hours);
    minsEl.innerText = formatTime(minutes);
    secondsEl.innerText = formatTime(seconds);
}
countDown();
setInterval(countDown, 1000);
