document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");
  var wavesurfer = WaveSurfer.create({
    container: "#audiowave",
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

  video.addEventListener("play", function () {
    wavesurfer.play();
  });

  video.addEventListener("pause", function () {
    wavesurfer.pause();
  });

  video.addEventListener("ended", function () {
    wavesurfer.stop();
  });
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
