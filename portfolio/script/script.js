start();
window.onresize = start;
function start() {
  if (window.innerWidth <= 400) {
    document.getElementById('ReelButton').textContent = "VIEW REEL"
  }
  else { document.getElementById('ReelButton').textContent = "View Reel on Youtube" }
}