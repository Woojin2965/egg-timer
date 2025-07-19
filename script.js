function toString(seconds) {
    minutes = Math.floor( seconds / 60 );
    if (minutes < 10) minutes = "0" + minutes; 
    seconds = seconds % 60;
    if (seconds < 10) seconds = "0" + seconds;
    return minutes + ":" + seconds;
}

function countdown() {
    seconds --;
    if(seconds >= 0) {
        var timer = document.getElementById("timer");
        timer.innerText = toString(seconds);
    }
    if(seconds === 0) {
        clearInterval(interval);
    }
}

function set(n) {
    seconds = n * 60;
    var timer = document.getElementById("timer");
    timer.innerText = toString(seconds);

    interval = setInterval(countdown, 1000);
}

