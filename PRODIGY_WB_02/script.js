let startTime;
let isRunning = false;
let laps = [];

function startStop() {
  if (!isRunning) {
    startTime = new Date().getTime();
    isRunning = true;
    document.getElementById("startStop").innerHTML = "Stop";
    runStopwatch();
  } else {
    isRunning = false;
    document.getElementById("startStop").innerHTML = "Start";
  }
}

function reset() {
  clearInterval(interval);
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("startStop").innerHTML = "Start";
  isRunning = false;
  laps = [];
  document.getElementById("laps").innerHTML = "";
}

function runStopwatch() {
  interval = setInterval(function() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    document.getElementById("display").innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
  }, 10);
}

function recordLap() {
  if (isRunning) {
    laps.push(document.getElementById("display").innerHTML);
    displayLaps();
  }
}

function displayLaps() {
  let lapsHtml = "";
  laps.forEach((lap, index) => {
    lapsHtml += `<p>Lap ${index + 1}: ${lap}</p>`;
  });
  document.getElementById("laps").innerHTML = lapsHtml;
}

function pad(number) {
  return (number < 10 ? '0' : '') + number;
}
