const COORDS = "coords";

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadCoords === null) {
    askForCoords();
  } else {
    //get weather
  }
}

function init() {
  loadCoords();
}

init();
