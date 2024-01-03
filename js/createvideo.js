document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");
  var playButton = document.getElementById("playButton");
  var progressBarContainer = document.getElementById("progress-container");
  var progressBar = document.getElementById("progress-bar");
  var currentTimeDisplay = document.getElementById("currentTime");
  var totalDurationDisplay = document.getElementById("totalDuration");
  var playIcon = document.getElementById("playIcon");
  var pauseIcon = document.getElementById("pauseIcon");

  var wavesurfer = WaveSurfer.create({
    container: "#audiowave",
    // waveColor: "#53535363",
    progressColor: "#4169E1",
    height: 40,
    responsive: true,
    hideScrollbar: true,
    cursorColor: "#53535363",
    cursorWidth: 2,
    barWidth: 2,
    barGap: 1.5,
    skipLength: 5,
  });

  wavesurfer.load("../assets/sounds/sound.mp3");

  playButton.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      playIcon.style.display = "none";
      pauseIcon.style.display = "block";
      wavesurfer.playPause();
    } else {
      video.pause();
      playIcon.style.display = "block";
      pauseIcon.style.display = "none";
      wavesurfer.playPause();
    }
  });

  video.addEventListener("timeupdate", function () {
    // Calculate progress as a percentage
    var progress = (video.currentTime / video.duration) * 100;
    progressBar.style.width = progress + "%";

    // Update current time display
    currentTimeDisplay.innerText = formatTime(video.currentTime);

    // Update total duration display
    totalDurationDisplay.innerText = formatTime(video.duration);
  });

  progressBarContainer.addEventListener("click", function (event) {
    // Calculate the click position relative to the progress bar container
    var clickX =
      event.clientX - progressBarContainer.getBoundingClientRect().left;
    var progressBarWidth = progressBarContainer.offsetWidth;

    // Calculate the percentage of the click position
    var clickPercentage = (clickX / progressBarWidth) * 100;

    // Set the new time in the video based on the click percentage
    var newTime = (clickPercentage / 100) * video.duration;
    video.currentTime = newTime;
  });

  // Helper function to format time in MM:SS format
  function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
});

const imageContainers = document.querySelectorAll(".image-container");

imageContainers.forEach((imageContainer) => {
  const overlayContent = imageContainer.querySelector(".image-dropdown");
  let timeout;

  imageContainer.addEventListener("mouseover", function () {
    clearTimeout(timeout);
    overlayContent.style.display = "block";
  });

  imageContainer.addEventListener("mouseout", function () {
    timeout = setTimeout(function () {
      overlayContent.style.display = "none";
    }, 500);
  });
});

const modal = document.querySelector(".main-modal");
const closeIcon = document.querySelector(".close-icon");
const modalContent = document.querySelector(".create-video-modal");
const modalOpeners = document.querySelectorAll(".modal-opener");

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

closeIcon.addEventListener("click", () => {
  modal.style.display = "none";
});

modalOpeners.forEach((modalOpener) => {
  modalOpener.addEventListener("click", (e) => {
    e.stopPropagation();
    modal.style.display = "flex";
  });
});

modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});
