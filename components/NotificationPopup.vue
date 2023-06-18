<template>
  <div
    class="notification-popup"
    :class="{ open: popupStore.isPopupOpen('Notification') }"
  >
    <div class="notification-popup-left">
      <i :class="popupStore.getData('Notification') ? alertsStore.getAlertUI(popupStore.getData('Notification').reporting).icon : ''"></i>
    </div>
    <div class="notification-popup-right">
      <h3 class="notification-popup-right-title">{{ popupStore.getData('Notification') ? alertsStore.getAlertUI(popupStore.getData('Notification').reporting).title : '' }}</h3>
      <div class="notification-popup-right-text">
        Signalé il y a {{ popupStore.getData('Notification') ? alertsStore.getTimeText(popupStore.getData('Notification')) : '...' }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { $ws } = useNuxtApp();
import { usePopupStore } from "../stores/popup";
import { useAlertsStore } from "../stores/alerts";
import { useUserStore } from "../stores/user";

const popupStore = usePopupStore();
const alertsStore = useAlertsStore();
const userStore = useUserStore();

popupStore.addPopup("Notification");
</script>

<style scoped>
.notification-popup {
  position: fixed;
  top: 20px;
  margin: auto;
  background-color: #3d4a5c;
  width: calc(100% - 40px);
  height: 80px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 20;
  transition: transform 0.3s ease-in-out;
  transform: translateY(calc(-100% - 24px));
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
  transform: translateY(0);
}
</style>