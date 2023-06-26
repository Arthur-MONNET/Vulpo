<template>
  <div id="map-container"></div>
  <div class="zone">
    <img src="../assets/images/forest_location.png" />
  </div>
  <div class="marker-animal w-0 h-0 flex items-end">
    <img src="../assets/icons/MarkerAnimal.svg" class="bottom-0 left-0 min-w-[32px] min-h-[32px]"/>
  </div>
  <div class="marker-canicule w-0 h-0 flex items-end">
    <img src="../assets/icons/MarkerCanicule.svg" class="bottom-0 left-0 min-w-[32px] min-h-[32px]"/>
  </div>
</template>

// nuxt 3

<script setup>
const { lng, lat } = defineProps({
  lng: String,
  lat: String,
});

const longitude = lng ? parseFloat(lng) : null;
const latitude = lat ? parseFloat(lat) : null;
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
  createMarkers();

  // set alerts on map

  alertsStore.$subscribe((mutations, state) => {
    console.log(mutations);
    if (mutations.events) {
      if (
        mutations.events.key === "alerts" &&
        mutations.events.oldValue.length === mutations.events.newValue.length
      ) {
        return;
      }
    }

    createMarkers();
  });
  await waitForGeolocation();
  console.log("geolocation found");
  navigator.geolocation.getCurrentPosition((position) => {
    userStore.setLocation({
      lat: 45.771834 || position.coords.latitude,
      lng: 6.114932 || position.coords.longitude,
    });
    map.setCenter(lat && lng ? [lng, lat] : userStore.getLocationAsArray);
    if (mapStore.findMarker("user")) mapStore.removeMarker("user");
    mapStore.addMarker(
      "zone_Semnoz",
      [6.110293, 45.774923],
      document.querySelector(".zone")
    );
    mapStore.addMarker(
      "animal_blesse",
      [6.190606,45.891490],
      document.querySelector(".marker-animal")
    );
    mapStore.addMarker(
      "canicule",
      [6.109447, 45.782528],
      document.querySelector(".marker-canicule")
    );
    mapStore.addMarker(
      "user",
      userStore.getLocationAsArray,
      userStore.generateHtmlMarker()
    );

    lat && lng ? mapStore.focusOn([lng, lat]) : mapStore.focusOnByName("user");
  });
  // set zoom 11

  map.on("zoom", () => {
    const zoom = map.getZoom();
    const scale =
      (33 * 1) /
      ((window.devicePixelRatio * 40075016.686) / (256 * Math.pow(2, zoom)));
    const alerts_marker = document.querySelectorAll(".alert-marker, .marker-animal, .marker-canicule");
    alerts_marker.forEach((alert_marker) => {
      // si on est trop dézoomé, on cache les markers
      if (map.getZoom() < 8) {
        alert_marker.style.display = "none";
      } else {
        alert_marker.style.display = "flex";
      }

    });
    const zones = document.querySelectorAll(".zone");
    zones.forEach((zone) => {
      zone.querySelector("img").style.transform = `scale(${scale})`;
    });
  });
  map.on("move", () => {
    mapStore.setIsUserMarkerCentered();
    mapStore.setIsMarkerCentered();
  });
});

const waitForGeolocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
    console.log("waiting for geolocation");
  });
};

const createMarkers = () => {
  console.log("create markers");
  if (alertsStore.getAlertsWithoutBeacon.length === 0) return;
  if (
    alertsStore.getAlertsWithoutBeacon.length ===
    mapStore.getMarkers.length - 1
  )
    return;
  for (const alert of alertsStore.getAlertsWithoutBeaconAndSortBy("latitude")) {
    if (mapStore.findMarker(alert.id)) continue;
    if (alert.status !== "marker") continue;
    mapStore.addMarker(
      alert.id,
      alertsStore.getAlertPositionAsArray(alert),
      alertsStore.generateHtmlMarker(alert)
    );
  }
  for (const marker of mapStore.getMarkers) {
    if (marker.name === "user") continue;
    marker.marker.getElement().addEventListener("click", () => {
      alertsStore.setAlertAsOpen(alertsStore.getAlertById(marker.name));
    });
  }
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
</script>

<style scoped>
#map-container {
  width: 100%;
  height: calc(100vh + 160px);
  margin: -80px 0 -80px;
}
</style>

<style>
.user-marker {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #ffc24c;
}

.user-marker::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffc34d4d;
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
  pointer-events: none !important;
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
  pointer-events: all;
}

.alert-marker svg {
  width: 25px;
  height: 20px;
  display: flex;
  z-index: -1;
  pointer-events: all;
}

.alert-marker svg path {
  width: 100%;
  height: 100%;
  pointer-events: all;
}

.zone {
  display: none;
  position: absolute;
  mix-blend-mode: color-dodge;
  pointer-events: all;
  filter: opacity(0.8);
}
.zone.mapboxgl-marker {
  display: block;
}
</style>
