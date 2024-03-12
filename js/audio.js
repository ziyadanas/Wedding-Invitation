var audio = document.getElementById("backgroundAudio");
	  
function playBackgroundAudio() {
  if (audio.paused) {
    audio.play();
  }
}

//window.addEventListener("scroll", playBackgroundAudio);
document.addEventListener("touchstart", playBackgroundAudio);
document.addEventListener("click", playBackgroundAudio);