var x = 0;

var time = setInterval(() => {
    x = x+1;
    var minutes =parseInt(x / 60);
    var seconds = x % 60;
    if (seconds < 10 ) {
        seconds = "0" + seconds;
       
    }
    if(minutes < 10)
    {

    }
    document.getElementsByClassName("clock")[0].innerText = minutes;
    document.getElementsByClassName("clock")[1].innerText = seconds;
    if (x <= 0) {
        clearInterval(time);
    }
}, 1000);


