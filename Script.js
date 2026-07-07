// ⏳ 3 DAYS TIMER
let totalTime = 3 * 24 * 60 * 60;

let timer1 = document.getElementById("timer");

if (timer1) {
let t1 = setInterval(function () {

    let days = Math.floor(totalTime / (24 * 60 * 60));
    let hours = Math.floor((totalTime % (24 * 60 * 60)) / (60 * 60));
    let minutes = Math.floor((totalTime % (60 * 60)) / 60);
    let seconds = totalTime % 60;

    timer1.innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    totalTime--;

    if (totalTime < 0) {
        clearInterval(t1);
        timer1.innerHTML = "Time Up!";
    }

}, 1000);
}


// ⏱️ 10 MINUTES TIMER
let startingMinutes = 10;
let time = startingMinutes * 60;

let timer2 = document.getElementById("timer2");

if (timer2) {
let t2 = setInterval(function () {

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer2.innerHTML = `${minutes}:${seconds}`;

    time--;

    if (time < 0) {
        clearInterval(t2);
        timer2.innerHTML = "00:00";
    }

}, 1000);
}
document.getElementById("orderForm").addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_r9b94pk",
        "template_84fd4vi",
        this
    )
    .then(function(){

        alert("✅ Order Sent Successfully!");

        document.getElementById("orderForm").reset();

    })
    .catch(function(error){

        alert(error.text);

    });

});
