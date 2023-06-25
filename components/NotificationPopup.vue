<template>
  <div
    class="notification-popup"
    :class="{ open: popupStore.isPopupOpen('Notification') }"
  >
    <Notification
      :text="
      popupStore.getData('Notification')
          ? alertsStore.getAlertUIBeacon(popupStore.getData('Notification').reporting).text
          : '...'"
      :timeText="
        popupStore.getData('Notification')
          ? alertsStore.getTimeText(popupStore.getData('Notification'))
          : '...'"
      v-on:click="
          //si on est sur la page de la map, on focus sur l'alerte
          if (route.name === 'map') {
            mapStore.focusOnByName('zone_Semnoz');
            popupStore.closePopup('Notification');
          } else {
            //sinon on redirige vers la page de la map
            navigateTo({ path: '/map', query: { lng: 6.110293, lat: 45.774923 } });
          }"
    />
  </div>
</template>

<script setup>
const { $ws } = useNuxtApp();
const route = useRoute();
import { usePopupStore } from "../stores/popup";
import { useAlertsStore } from "../stores/alerts";
import { useUserStore } from "../stores/user";
import { useMapStore } from "../stores/map";

const popupStore = usePopupStore();
const alertsStore = useAlertsStore();
const userStore = useUserStore();
const mapStore = useMapStore();

popupStore.addPopup("Notification");
</script>

<style scoped>
.notification-popup {
  position: fixed;
  top: -80px;
  margin: auto;
  width: calc(100% - 32px);
  height: 75px;
  overflow: hidden;
  z-index: 999;
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
}

.notification-popup .notification-popup-left {
  position: relative;
  height: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
}

.notification-popup .notification-popup-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 24px;
  width: 100%;
  height: 100%;
}

.notification-popup .notification-popup-right-title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
}

.notification-popup .notification-popup-right-text {
  font-size: 14px;
  font-weight: 400;
  color: rgb(0, 0, 0);
  align-self: flex-end;
}
</style>

<style>
.notification-popup.open {
  transform: translateY(calc(100% + 24px));
}
</style>