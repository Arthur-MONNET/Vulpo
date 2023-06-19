<template>
  <div
    class="notification-popup"
    :class="{ open: popupStore.isPopupOpen('Notification') }"
  >
    <Notification
      :icon="
        popupStore.getData('Notification')
          ? popupStore.getData('Notification').status === 'marker'
            ? alertsStore.getAlertUI(
                popupStore.getData('Notification').reporting
              ).icon
            : alertsStore.getAlertUIBeacon(
                popupStore.getData('Notification').reporting
              ).icon
          : ''
      "
      :title="
        popupStore.getData('Notification')
          ? popupStore.getData('Notification').status === 'marker'
            ? alertsStore.getAlertUI(
                popupStore.getData('Notification').reporting
              ).title
            : alertsStore.getAlertUIBeacon(
                popupStore.getData('Notification').reporting
              ).title
          : ''
      "
      :timeText="
        popupStore.getData('Notification')
          ? alertsStore.getTimeText(popupStore.getData('Notification'))
          : '...'
      "
      :isOpened="true"
      :status="
        popupStore.getData('Notification')
          ? popupStore.getData('Notification').status
          : ''
      "
      v-on:click="
        popupStore.getData('Notification')
          ? (alertsStore.setAlertAsOpen(popupStore.getData('Notification')),
            popupStore.getData('Notification').status === 'marker'
              ? mapStore.focusOnByName(popupStore.getData('Notification').id)
              : navigateTo(
                  '/explore/' +
                    alertsStore.getAlertUIBeacon( popupStore.getData('Notification').reporting
                    ).location +
                    (alertsStore.getAlertUIBeacon( popupStore.getData('Notification').reporting
                    ).isAnimals
                      ? '/' + alertsStore.getAlertUIBeacon( popupStore.getData('Notification').reporting
                    ).animal
                      : '')
                ),
            popupStore.closePopup('Notification'))
          : ''
      "
    />
  </div>
</template>

<script setup>
const { $ws } = useNuxtApp();
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
  background-color: #3d4a5c;
  width: calc(100% - 40px);
  height: 80px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 20;
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  border-radius: 8px;
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