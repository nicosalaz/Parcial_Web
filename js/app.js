var audio = document.createElement("audio");

if (audio.canPlayType("audio/mpeg")) {
    audio.setAttribute("src","../styles/Stressed_Out.mp3");
}

function play(x) {
    audio.play();
    x.style.display = "none";
    var pausa = document.getElementById("stop");
    pausa.style.display = "flex";
}
function stop(x) {
    audio.pause();
    x.style.display = "none";
    var sonar = document.getElementById("play");
    sonar.style.display = "flex";
}