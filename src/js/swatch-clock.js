// code taken from https://wiki.melonland.net/swatch_time
// i really am just ripping off varphi

function getSwatchTime(showDecimals = true) {
  // get date in UTC/GMT
  var date = new Date();
  var hours = date.getUTCHours();
  var minutes = date.getUTCMinutes();
  var seconds = date.getUTCSeconds();
  var milliseconds = date.getUTCMilliseconds();
  // add hour to get time in Switzerland
  hours = hours == 23 ? 0 : hours + 1;
  // time in seconds
  var timeInMilliseconds =
    ((hours * 60 + minutes) * 60 + seconds) * 1000 + milliseconds;
  // there are 86.4 seconds in a beat
  var millisecondsInABeat = 86400;
  // calculate beats to two decimal places
  if (showDecimals) {
    return Math.abs(timeInMilliseconds / millisecondsInABeat).toFixed(2);
  } else {
    return Math.floor(Math.abs(timeInMilliseconds / millisecondsInABeat));
  }
}

function updateClock() {
  const clock = document.getElementById("time");
  clock.innerText = "@" + getSwatchTime();
  requestAnimationFrame(updateClock);
}

addEventListener("load", updateClock);
