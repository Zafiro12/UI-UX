const audio = document.getElementById("audio");
    const progressBar = document.getElementById("progress-bar");

    const playButton = document.getElementById("play");

    const stopButton = document.getElementById("stop");
    const repeatButton = document.getElementById("repeat");

    const backwardsButton = document.getElementById("backwards");
    const fordwardsButton = document.getElementById("forward");

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
        audio.childNodes.
        audio.currentTime = 0;
    })

    repeatButton.addEventListener("click", function () {
        audio.currentTime = 0;
        audio.play();
    })

    backwardsButton.addEventListener("click", function () {
        audio.currentTime -= 10;
    })
    fordwardsButton.addEventListener("click", function () {
        audio.currentTime += 10;
    })

    volume.addEventListener("change", function(e) {
    audio.volume = e.currentTarget.value / 100;
})

    audio.addEventListener("timeupdate", function (event) {
        const playImage = document.getElementById("play-image");

        progressBar.setAttribute("value", (event.target.currentTime/event.target.duration).toString());

        if (event.target.currentTime === event.target.duration || event.target.paused) {
            playImage.setAttribute("src", "assets/player-play.svg");
        } else if (!event.target.paused) {
            playImage.setAttribute("src", "assets/player-pause.svg");
        }
    })