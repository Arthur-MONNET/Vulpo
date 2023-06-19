// nuxt 3

<template>
  <div id="index-page">
    <Map :lng="route.query.lng || ''" :lat="route.query.lat || ''" />
    <Button
      event="OPEN_POPUP"
      target="Menu"
      i="bars"
      iType="solid"
      styleTailwind="absolute top-4 left-4 text-gray-700 bg-white h-12 w-12 rounded-full"
    />
    <!--<Button
      event="GO_TO"
      target="search"
      i="search"
      iType="solid"
      styleTailwind="absolute top-4 right-4 text-gray-700 bg-white h-12 w-12 rounded-full"
    />-->
    <Button
      event="FOCUS_ON"
      target="user"
      i="location-crosshairs"
      iType="solid"
      styleTailwind="fixed bottom-32 left-4 z-10 text-gray-700 bg-white h-12 w-12 rounded-full z-20"
      :class="mapStore.getIsUserMarkerCentered ? 'slide-in' : 'slide-out'"
    />
    <MapFooter />
    <ReportingPopup />
    <MenuPopup />
    <NotificationPopup />
  </div>
</template>

<script setup>
const route = useRoute();

import { usePopupStore } from "../stores/popup";
import { useMapStore } from "../stores/map";
import { useAlertsStore } from "../stores/alerts";

const popupStore = usePopupStore();
const mapStore = useMapStore();
const alertsStore = useAlertsStore();

onMounted(async () => {
  alertsStore.$subscribe(async (mutations, state) => {
    const alert = alertsStore.getMostRecentAlertAndNotOpened;
    if (!alert) return;
    if (popupStore.getData("Notification")) {
      if (alert.id == popupStore.getData("Notification").id) return;
    }
    popupStore.closePopup("Notification");
    await sleep(600);
    popupStore.openPopup("Notification", alert);
  });
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
</script>

<style scoped>
#index-page {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>