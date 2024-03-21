const daysEl = document.getElementById("days")!;
const hoursEl = document.getElementById("hours")!;
const minsEl = document.getElementById("mins")!;
const secondsEl = document.getElementById("seconds")!;

const newYears: string = "1 Jan 2025";

function formatTime(time: number): string {
  return String(time < 10 ? '0' + time : time);
}

function countDown(): void {
  const currentDate: Date = new Date();
  const newYearsDate: Date = new Date(newYears);

  const totalSeconds: number = (+newYearsDate - +currentDate) / 1000;

  const seconds: number = Math.floor(totalSeconds % 60);
  const minutes: number = Math.floor(totalSeconds / 60) % 60;
  const hours: number = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / 3600 / 24);

  daysEl.innerText = formatTime(days);
  hoursEl.innerText = formatTime(hours);
  minsEl.innerText = formatTime(minutes);
  secondsEl.innerText = formatTime(seconds);
}

countDown();
setInterval(countDown, 1000);
