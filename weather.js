const COORDS = "coords";

function handleGeoSucces(position) {
  console.log(position);
}

function handleGeoError() {
  console.log("Cant acces geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  } else {
    //get weather
  }
}

function init() {
  loadCoords();
}

init();
