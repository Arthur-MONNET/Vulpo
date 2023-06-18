<template>
  <div id="map-container"></div>
</template>

// nuxt 3

<script setup>
import { useUserStore } from "../stores/user";
import { useAlertsStore } from "../stores/alerts";
import { useMapStore } from "../stores/map";
const alertsStore = useAlertsStore();
const userStore = useUserStore();
const mapStore = useMapStore();
onMounted(async () => {
  const { $mapboxgl } = useNuxtApp();
  mapStore.setMapboxgl($mapboxgl);
  const map = mapStore.setMap(
    "map-container",
    "mapbox://styles/zak74/clijz8k4j00do01pfe4jv1cn4",
    12
  );

  // set alerts on map

  alertsStore.$subscribe((mutations, state) => {
    if (alertsStore.getAlerts.length < 1) return;
    if (alertsStore.getAlerts.length === mapStore.getMarkers.length - 1) return;
    for (const alert of alertsStore.getAlerts) {
      if (mapStore.findMarker(alert.id)) continue;
      if (alert.status !== "marker") continue;
      mapStore.addMarker(
        alert.id,
        alertsStore.getAlertPositionAsArray(alert),
        alertsStore.generateHtmlMarker(alert)
      );
    }
  });
  await waitForGeolocation();
  navigator.geolocation.getCurrentPosition((position) => {
    userStore.setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
    map.setCenter(userStore.getLocationAsArray);
    if(mapStore.findMarker("user")) mapStore.removeMarker("user");
    mapStore.addMarker(
      "user",
      userStore.getLocationAsArray,
      userStore.generateHtmlMarker()
    );
    mapStore.focusOnByName("user", 14);
  });

  map.on("move", () => {
    mapStore.setIsUserMarkerCentered()
  });
});

const waitForGeolocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};


</script>

<style scoped>
#map-container {
  width: 100%;
  height: calc(100vh + 160px);
  margin: -100px 0 -60px;
}
</style>

<style>
.user-marker {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #0b81af;
}

.user-marker::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #158de9;
  transform: translate(-50%, -50%);
}

.user-marker::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #26a1ff99;
  transform: translate(-50%, -50%);
}

.alert-marker {
  width: 35px;
  height: 57px;
  padding-bottom: 50px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.alert-marker i {
  font-size: 20px;
  aspect-ratio: 1/1;
  color: #000000;
  padding: 5px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: #fff 2px solid;
  z-index: 20;
}

.alert-marker svg {
  width: 25px;
  height: 20px;
  display: flex;
  z-index: -1;
}

.alert-marker svg path {
  width: 100%;
  height: 100%;
}
</style>
