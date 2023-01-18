const audio = document.getElementById("audio");
const progressBar = document.getElementById("progress-bar");

const playButton = document.getElementById("play");

const stopButton = document.getElementById("stop");
const repeatButton = document.getElementById("repeat");

const backwardsButton = document.getElementById("backwards");
const forwardsButton = document.getElementById("forward");

const mute = document.getElementById("mute");
const volume = document.getElementById("volume");

playButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
})

stopButton.addEventListener("click", function () {
    audio.pause();
    audio.currentTime = 0;
})

repeatButton.addEventListener("click", function () {
    audio.currentTime = 0;
    audio.play();
})

backwardsButton.addEventListener("click", function () {
    audio.currentTime -= 10;
})
forwardsButton.addEventListener("click", function () {
    audio.currentTime += 10;
})

let prevVolume = 100;
mute.addEventListener("click", function () {
    if (audio.volume!==0) {
        prevVolume = audio.volume;
        audio.volume = 0;
    } else {
        audio.volume = prevVolume;
    }
    
    const muteImage = document.getElementById("mute-image");

    if (audio.volume === 0) {
        muteImage.setAttribute("src", "assets/images/player-mute.svg");
    } else {
        muteImage.setAttribute("src", "assets/images/player-volume.svg");
    }
})
volume.addEventListener("change", function (e) {
    audio.volume = e.currentTarget.value / 100;
    const muteImage = document.getElementById("mute-image");

    if (audio.volume === 0) {
        muteImage.setAttribute("src", "assets/images/player-mute.svg");
    } else {
        muteImage.setAttribute("src", "assets/images/player-volume.svg");
    }
})

audio.addEventListener("timeupdate", function (event) {
    const playImage = document.getElementById("play-image");

    progressBar.setAttribute("value", (event.target.currentTime / event.target.duration).toString());

    if (event.target.currentTime === event.target.duration || event.target.paused) {
        playImage.setAttribute("src", "assets/images/player-play.svg");
    } else if (!event.target.paused) {
        playImage.setAttribute("src", "assets/images/player-pause.svg");
    }
})