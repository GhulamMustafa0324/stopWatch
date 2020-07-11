var millisec = 0;
var sec = 0;
var min = 0;

var displayMillisec = 0;
var displaySec = 0;
var displayMin = 0;

var interval = 0;

var status = "stopped"



function stopWatch() {
    millisec++;

    if (millisec >= 100) {

        millisec = 0
        sec++

    }

    if (sec >= 60) {
        sec = 0
        min++

    }

    if (millisec < 10) {
        displayMillisec = "0" + millisec.toString();
    }
    else {
        displayMillisec = millisec;
    }

    if (sec < 10) {
        displaySec = "0" + sec.toString();
    }
    else {
        displaySec = sec;
    }

    if (min < 10) {
        displayMin = "0" + min.toString();
    }
    else {
        displayMin = min;
    }


    document.getElementById("display").innerHTML = displayMin + ":" + displaySec + "." + displayMillisec

}



function startStop() {
    if (status === "true") {
        interval = window.setInterval(stopWatch, 10)
        document.getElementById("startStop").innerHTML = "Stop";
        status = "false"

    }
    else {
        window.clearInterval(interval)
        document.getElementById("startStop").innerHTML = "Start";
        status = "true"
    }
}

function reset() {
    window.clearInterval(interval);
    millisec = 0;
    sec = 0;
    min = 0;
    document.getElementById("display").innerHTML = "00:00.00"
    document.getElementById("startStop").innerHTML = "Start"
}

var Lap = document.getElementById('lap');
var Laps = document.getElementById('laps');

Lap.onclick = function() {
  Laps.innerHTML += "<li>" + displayMin + ":"  + displaySec + ":"  + displayMillisec + "</li>";
}
