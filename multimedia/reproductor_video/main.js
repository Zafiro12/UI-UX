const video = document.getElementById("video");
const progressBar = document.getElementById("progress-bar");
const time = document.getElementById("time");

const playButton = document.getElementById("play");

const stopButton = document.getElementById("stop");
const repeatButton = document.getElementById("repeat");

const backwardsButton = document.getElementById("backwards");
const forwardsButton = document.getElementById("forward");

const mute = document.getElementById("mute");
const volume = document.getElementById("volume");

const fullscreen = document.getElementById("fullscreen");

playButton.addEventListener("click", function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
})

stopButton.addEventListener("click", function () {
    video.pause();
    video.currentTime = 0;
})

repeatButton.addEventListener("click", function () {
    video.currentTime = 0;
    video.play();
})

backwardsButton.addEventListener("click", function () {
    video.currentTime -= 5;
})
forwardsButton.addEventListener("click", function () {
    video.currentTime += 5;
})

let prevVolume = 100;
mute.addEventListener("click", function () {
    if (video.volume !== 0) {
        prevVolume = video.volume;
        video.volume = 0;
    } else {
        video.volume = prevVolume;
    }

    const muteImage = document.getElementById("mute-image");

    if (video.volume === 0) {
        muteImage.setAttribute("src", "assets/images/player-mute.svg");
    } else {
        muteImage.setAttribute("src", "assets/images/player-volume.svg");
    }
})
volume.addEventListener("change", function (e) {
    video.volume = e.currentTarget.value / 100;
    const muteImage = document.getElementById("mute-image");

    if (video.volume === 0) {
        muteImage.setAttribute("src", "assets/images/player-mute.svg");
    } else {
        muteImage.setAttribute("src", "assets/images/player-volume.svg");
    }
})

fullscreen.addEventListener("click", function () {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
})

video.addEventListener("timeupdate", function (event) {
    const playImage = document.getElementById("play-image");

    progressBar.setAttribute("value", (event.target.currentTime / event.target.duration).toString());

    if (event.target.currentTime === event.target.duration || event.target.paused) {
        playImage.setAttribute("src", "assets/images/player-play.svg");
    } else if (!event.target.paused) {
        playImage.setAttribute("src", "assets/images/player-pause.svg");
    }

    const minutes = Math.floor(event.target.currentTime / 60);
    const seconds = Math.floor(event.target.currentTime % 60);
    const totalMinutes = Math.floor(event.target.duration / 60);
    const totalSeconds = Math.floor(event.target.duration % 60);

    time.innerHTML = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}/${totalMinutes}:${totalSeconds < 10 ? "0" + totalSeconds : totalSeconds}`;
});