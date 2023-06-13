<template>
  <!-- Reporting Popup height = 50% lorsque open -->
  <div class="menu-popup" :class="{ open: popupStore.isPopupOpen('Menu') }">
    <div class="menu-popup-header">
      <button class="close-popup" @touchend="popupStore.closePopup('Menu')">
        <i class="fas fa-close"></i>
      </button>
    </div>

    <div class="menu-popup-content">
      <Button v-for="menu in menuStore.getMenu" :key="menu.id" event="GO_TO" :target="menu.target" :text="menu.title" styleTailwind="w-full h-12 rounded-lg mb-4 flex items-start"/>
    </div>
  </div>
</template>

<script setup>
const { $ws } = useNuxtApp();
import { usePopupStore } from "../stores/popup";
import { useMenuStore } from "../stores/menu";

const popupStore = usePopupStore();
const menuStore = useMenuStore();

popupStore.addPopup("Menu");
</script>

<style scoped>
/* Signalement Popup */
.menu-popup {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 90%;
  height:100%;
  padding: 24px;
  font-size: 32px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(28.5px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 20;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
}

.menu-popup-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 72px;
}

.menu-popup-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0 24px;
}

.close-popup {
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>

<style>
.menu-popup.open {
  transform: translateX(0%);
}
</style>