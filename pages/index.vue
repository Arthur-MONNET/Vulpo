<template>
  <div class="w-full flex flex-col items-center justify-center">
    <NotificationPopup />
  </div>
  <img src="../assets/header.png" class="fixed top-0 left-0 w-full" />
  <img src="../assets/Group_1448.png" class="top-0 left-0 w-full" />
  <img src="../assets/BAR_MENU.png" class="fixed bottom-0 left-0 w-full" />
</template>

<script setup>

import { usePopupStore } from "../stores/popup";
import { useAlertsStore } from "../stores/alerts";

const popupStore = usePopupStore();
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

    if (alert.status === "beacon-reconition") {
      await sleep(6000);
      popupStore.closePopup("Notification");
    }
  });
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
</script>