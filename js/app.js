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
  console.log(event);
}

function onError(err) {
  alert("cannot access location" + err);
}
