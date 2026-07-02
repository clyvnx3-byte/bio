document.addEventListener("mousemove", (e) => {
  let glow = document.createElement("div");

  glow.style.position = "absolute";
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
  glow.style.width = "10px";
  glow.style.height = "10px";
  glow.style.background = "rgba(0,255,255,0.5)";
  glow.style.borderRadius = "50%";
  glow.style.pointerEvents = "none";
  glow.style.transform = "translate(-50%, -50%)";
  glow.style.boxShadow = "0 0 20px cyan";

  document.body.appendChild(glow);

  setTimeout(() => {
    glow.remove();
  }, 300);
});
