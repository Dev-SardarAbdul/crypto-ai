document.addEventListener("DOMContentLoaded", function () {
  var audioPlayer = document.getElementById("audioPlayer");
  var playPauseButton = document.getElementById("playPauseButtonAudio");
  var progressBar = document.getElementById("progressBarAudio");
  var progressIndicator = document.getElementById("progressIndicatorAudio");
  var currentTimeDisplay = document.getElementById("currentTimeAudio");
  var durationDisplay = document.getElementById("durationAudio");

  playPauseButton.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseButton.textContent = "Pause";
    } else {
      audioPlayer.pause();
      playPauseButton.textContent = "Play";
    }
  });

  audioPlayer.addEventListener("loadedmetadata", function () {
    // Update duration display
    durationDisplay.textContent = formatTime(audioPlayer.duration);
  });

  audioPlayer.addEventListener("timeupdate", function () {
    var currentTime = audioPlayer.currentTime;

    // Update progress bar
    var progressPercentage = (currentTime / audioPlayer.duration) * 100;
    progressIndicator.style.width = progressPercentage + "%";

    // Update current time display
    currentTimeDisplay.textContent = formatTime(currentTime);
  });

  progressBar.addEventListener("click", function (event) {
    // Calculate the new time based on click position
    var clickPosition =
      event.clientX - progressBar.getBoundingClientRect().left;
    var progressBarWidth = progressBar.clientWidth;
    var newTime = (clickPosition / progressBarWidth) * audioPlayer.duration;

    // Update audio player's current time
    audioPlayer.currentTime = newTime;
  });

  function formatTime(timeInSeconds) {
    var minutes = Math.floor(timeInSeconds / 60);
    var seconds = Math.floor(timeInSeconds % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  }
});
