const COORDS = "coords";

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude,
  };
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
