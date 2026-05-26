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

// 10 minutes ko seconds me convert kiya (10 * 60 = 600 seconds)
let startingMinutes = 10;
let time = startingMinutes * 60;

const timerEl = document.getElementById('timer2');

// Har 1 second (1000ms) baad timer ko update karne ke liye interval lagaya
const countdown = setInterval(updateCountdown, 1000);

function updateCountdown() {
    // Minutes aur Seconds calculate karein
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // Agar single digit ho (jaise 9, 8, 7...) toh aage '0' add karein (09, 08...)
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // HTML ke andar timer display karna
    timerEl.innerHTML = `${minutes}:${seconds}`;

    // Jab timer 0 ho jaye toh rok do
    if (time <= 0) {
        clearInterval(countdown);
        timerEl.innerHTML = "00:00"; // Timer khatam hone par display
    } else {
        time--; // Ek-ek second kam karte raho
    }
}

// Pehli baar bina delay ke turant timer show karne ke liye call kiya
updateCountdown();
