document.getElementById("sound1").addEventListener("click", function () {
  const audio = new Audio("audio/Afro.mp3");
  audio.play();
});

document.getElementById("sound2").addEventListener("click", function () {
  const audio = new Audio("audio/piano.mp3");
  audio.play();
});

document.getElementById("sound3").addEventListener("click", function () {
  const audio = new Audio("audio/relax.mp3");
  audio.play();
});
