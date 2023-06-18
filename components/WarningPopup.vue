<template>
  <div
    class="warning-popup"
    :class="{ open: popupStore.isPopupOpen('Warning') }"
  >
    <div class="angle top-left">
      <div></div>
      <div></div>
    </div>
    <div class="angle top-right">
      <div></div>
      <div></div>
    </div>
    <div class="angle bottom-left">
      <div></div>
      <div></div>
    </div>
    <div class="angle bottom-right">
      <div></div>
      <div></div>
    </div>
    <div class="warning-popup-header">
      <h3 class="warning-popup-header-title">report.title</h3>
    </div>
    <div class="warning-popup-content">
      <i class="fas fa-exclamation-triangle"></i>
    </div>
    <div class="warning-popup-footer">
      <div class="warning-popup-footer-text">
        Signalé il y a .... 
      </div>
      <button
        class="warning-popup-footer-button"
        @click="popupStore.closePopup('Warning')"
      >
        OK
      </button>
    </div>
  </div>
</template>

<script setup>
const { report } = defineProps({
  report: Object,
});
const { $ws } = useNuxtApp();
import { usePopupStore } from "../stores/popup";
import { useAlertsStore } from "../stores/alerts";
import { useUserStore } from "../stores/user";

const popupStore = usePopupStore();
const alertsStore = useAlertsStore();
const userStore = useUserStore();

popupStore.addPopup("Warning");
</script>

<style scoped>
.warning-popup {
  position: fixed;
  top: 80px;
  margin: auto;
  background-color: #c509091c;
  width: calc(100% - 60px);
  height: calc(100% - 230px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 20;
  transition: transform 0.3s ease-in-out;
  transform: scale(0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
}

.warning-popup .angle {
  position: absolute;
  width: 64px;
  height: 64px;
  z-index: 20;
}

.warning-popup .angle div {
  position: absolute;
  width: 8px;
  height: 8px;
  /* red warning */
  background-color: #c50909;
  border-radius: 4px;
}

.warning-popup .angle.top-left > div:nth-child(1) {
  width: 64px;
}

.warning-popup .angle.top-left > div:nth-child(2) {
  height: 64px;
}

.warning-popup .angle.top-right {
  right: 0;
}

.warning-popup .angle.top-right > div:nth-child(1) {
  width: 64px;
}

.warning-popup .angle.top-right > div:nth-child(2) {
  height: 64px;
  right: 0;
}

.warning-popup .angle.bottom-left {
  bottom: 0;
}

.warning-popup .angle.bottom-left > div:nth-child(1) {
  width: 64px;
  bottom: 0;
}

.warning-popup .angle.bottom-left > div:nth-child(2) {
  height: 64px;
}

.warning-popup .angle.bottom-right {
  bottom: 0;
  right: 0;
}

.warning-popup .angle.bottom-right > div:nth-child(1) {
  width: 64px;
  bottom: 0;
  right: 0;
}

.warning-popup .angle.bottom-right > div:nth-child(2) {
  height: 64px;
  right: 0;
  bottom: 0;
}

.warning-popup .warning-popup-header {
  position: relative;
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
  font-size: 1.5rem;
}

.warning-popup .warning-popup-header-title {
  font-weight: bold;
  background-color: #e8e8e8;
  border: 4px solid #c50909;
  padding: 4px 12px;
  border-radius: 8px;
}

.warning-popup .warning-popup-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #c50909;
  aspect-ratio: 1/1;
  margin: auto;
  border-radius: 50%;
  width: 40%;
}

.warning-popup .warning-popup-content i {
  font-size: 5rem;
  color: #e8e8e8;
}

.warning-popup .warning-popup-footer {
  position: relative;
  width: calc(100% - 40px);
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0);
  background-color: #e8e8e8;
  margin: 20px auto;
}

.warning-popup .warning-popup-footer-button {
  background-color: #c50909;
  border-radius: 8px;
  padding: 0 12px;
  color: #e8e8e8;
  font-weight: bold;
  cursor: pointer;
  pointer-events: all;
}
</style>

<style>
.warning-popup.open {
  transform: scale(1);
}
</style>