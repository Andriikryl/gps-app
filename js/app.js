let CURRENT_LOCATION = null;
let A = null;
let B = null;

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

function setA() {
  A = CURRENT_LOCATION;
  updateInfo();
}

function setB() {
  B = CURRENT_LOCATION;
  updateInfo();
}

function updateInfo() {
  if (A != null) {
    document.getElementById("aBtn").innerHTML =
      A.latitude + "<br>" + A.longitude;
  }

  if (B != null) {
    document.getElementById("bBtn").innerHTML =
      B.latitude + "<br>" + B.longitude;
  }

  if (A != null && B != null) {
    let dist = "?";
    document.getElementById("info").innerHTML = "distance: " + dist + "meters";
  }
}
