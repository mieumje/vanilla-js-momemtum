const COORDS = "coords";

function loadCoords() {
  const loadedCords = localStorage.getItme(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    //getWeather
  }
}

function init() {
  loadCoords();
}

init();
