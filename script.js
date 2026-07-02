const enter = document.getElementById("enter");
const main = document.getElementById("main");
const music = document.getElementById("music");

enter.addEventListener("click", () => {
  enter.style.display = "none";
  main.classList.remove("hidden");

  music.volume = 0.3;
  music.play();
});
