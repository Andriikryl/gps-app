let CURRENT_LOCATION = null;
function main() {
  let geolocation = null;
  if (window.navigator && window.navigator.geolocation) {
    geolocation = window.navigator.geolocation;
  }
  if (geolocation) {
    geolocation.watchPosition(onLocationUpdate, onError, {
      enableHighAccuracy: true,
      maximumAge: 1000,
    });
  } else {
    alert("Cannot access location");
  }
}

function onLocationUpdate(event) {
  CURRENT_LOCATION = event.coords;
  document.getElementById("loc").innerHTML =
    "Your location : <br> Lat:" +
    CURRENT_LOCATION.latitude +
    "<br>Lon:" +
    CURRENT_LOCATION.longitude;
}

function onError(err) {
  alert("cannot access location" + err);
}
