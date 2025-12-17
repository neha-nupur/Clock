function updateClock() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  /*  ANALOG  */
  let secondDeg = seconds * 6;
  let minuteDeg = minutes * 6 + seconds * 0.1;
  let hourDeg = (hours % 12) * 30 + minutes * 0.5;

  document.getElementById(
    "second"
  ).style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  document.getElementById(
    "minute"
  ).style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  document.getElementById(
    "hour"
  ).style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

  /* DIGITAL  */
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById(
    "digitalClock"
  ).innerHTML = `${hours} : ${minutes} : ${seconds} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();
