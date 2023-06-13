<template>
  <!-- Reporting Popup height = 50% lorsque open -->
  <div
    class="reporting-popup"
    :class="{ open: popupStore.isPopupOpen('Reporting') }"
  >
    <div
      class="reporting-popup-header"
      @touchmove.prevent
      @touchend="popupStore.closePopup('Reporting')"
    >
      <div class="reporting-popup-header-line"></div>
      <!-- le titre est soit "signalemnt" soit le nom de la catégorie selectionnée si il y en a une ( selectedCategory || "Signalement" )-->
      <h3 class="reporting-popup-header-title">
        {{
          alertsStore.getSelectCategory
            ? alertsStore.getSelectCategory.title
            : "Signalement"
        }}
      </h3>
    </div>
    <button
      v-if="alertsStore.categoryIsSelected"
      class="reporting-popup-return-to-categories"
      @click="alertsStore.setUnselectCategory"
    >
      <i class="fas fa-arrow-left"></i>
    </button>
    <div class="reporting-popup-content">
      <div
        v-if="!alertsStore.categoryIsSelected"
        class="reporting-popup-categories"
      >
        <button
          v-for="category in alertsStore.getCategories"
          :key="category.id"
          class="reporting-category"
          @click="alertsStore.setSelectCategory(category)"
        >
          <div
            class="reporting-category-icon"
            :style="{ backgroundColor: category.color }"
          >
            <i :class="category.icon"></i>
          </div>
          <div class="reporting-category-title">{{ category.title }}</div>
        </button>
      </div>
      <div v-if="alertsStore.categoryIsSelected" class="reporting-popup-list">
        <button
          v-for="reporting in alertsStore.getSelectCategory.reportings"
          :key="reporting.id"
          class="reporting-item"
          @click="sendAlert(reporting)"
        >
          <div
            class="reporting-item-icon"
            :style="{ backgroundColor: alertsStore.getSelectCategory.color }"
          >
            <i :class="reporting.icon"></i>
          </div>
          <div class="reporting-item-title">{{ reporting.title }}</div>
        </button>
      </div>
    </div>
    <div
      class="reporting-popup-close"
      @touchmove.prevent
      @touchend="popupStore.closePopup('Reporting')"
    ></div>
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

popupStore.addPopup("Reporting");

function sendAlert(reporting) {
  console.log("send alert : ", reporting);
  // Envoyer l'alerte au serveur via WebSocket
  $ws.send(
    JSON.stringify({
      sender: "app",
      type: "new-alert",
      payload: {
        category: alertsStore.getSelectCategory.id,
        type: reporting.id,
        latitude: userStore.getLocation.lat,
        longitude: userStore.getLocation.lng,
        user: 1,
        create_at: new Date().toISOString(),
      },
    })
  );
  // Fermer le popup
  popupStore.closePopup("Reporting");
  alertsStore.setUnselectCategory();
}
</script>

<style scoped>
/* Signalement Popup */
.reporting-popup {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  z-index: 20;
  transition: transform 0.3s ease-in-out;
  transform: translateY(100%);
}

.reporting-popup-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 100%;
}

.reporting-popup-header-line {
  width: 20px;
  height: 4px;
  background-color: #ccc;
  border-radius: 2px;
  margin-bottom: 8px;
}

.reporting-popup-header-title {
  font-size: 18px;
  font-weight: bold;
}

.reporting-popup-content {
  padding: 32px;
}

.reporting-popup-categories,
.reporting-popup-list {
  display: grid;
  max-height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
}

.reporting-category,
.reporting-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
}

.reporting-category-icon,
.reporting-item-icon {
  width: 80%;
  font-size: 70px;
  color: #363d38;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #d3d9d4;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* change grid template columns to repeat(3, 1fr) if ratio is 650/379 */
@media (min-aspect-ratio: 379/650) {
  .reporting-popup-categories,
  .reporting-popup-list {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
  }
  .reporting-category-icon,
  .reporting-item-icon {
    font-size: 50px;
  }
}

.reporting-category-title {
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
}

.reporting-item-title {
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
}

.reporting-popup-close {
  width: 100%;
  height: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: transparent;
  cursor: ns-resize;
}

.reporting-popup-return-to-categories {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>

<style>
.reporting-popup.open {
  transform: translateY(0%);
}
</style>