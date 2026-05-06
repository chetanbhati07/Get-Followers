let totalTime = 3 * 24 * 60 * 60; // 3 days in seconds

let timer = setInterval(function(){

    let days = Math.floor(totalTime / (24 * 60 * 60));
    let hours = Math.floor((totalTime % (24 * 60 * 60)) / (60 * 60));
    let minutes = Math.floor((totalTime % (60 * 60)) / 60);
    let seconds = totalTime % 60;

    document.getElementById("timer").innerText =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    totalTime--;

    if(totalTime < 0){
        clearInterval(timer);
        document.getElementById("timer").innerText = "Time Up!";
    }

}, 1000);
