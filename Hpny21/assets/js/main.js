var count = new Date("feb 10, 2021 00:00:00").getTime();

var x = setInterval(() => {
  var now = new Date().getTime();
  var time = count - now;

  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  if (days < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "Expired";
  }
}, 1000);