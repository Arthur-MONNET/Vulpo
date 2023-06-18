<template>
  <div id="notifications-page">
    <HeaderPage :title="'Notifications'" />
    <div class="notifications-list">
      <Notification
        v-for="alert in alertsStore.getAlerts"
        :key="alert.id"
        :icon="alertsStore.getAlertUI(alert.reporting).icon"
        :title="alertsStore.getAlertUI(alert.reporting).title"
        :timeText="alertsStore.getTimeText(alert)"
        :isOpened="alertsStore.isAlreadyOpen(alert)"
        v-on:click="alertsStore.setAlertAsOpen(alert), navigateTo({ path: '/', query: { lng: alert.longitude, lat: alert.latitude } })"
      />
    </div>
    <PageFooter/>
  </div>
</template>

<script setup>
import { on } from "events";
import { useAlertsStore } from "../stores/alerts";

const alertsStore = useAlertsStore();

onMounted(async () => {
  alertsStore.$subscribe(async (mutations, state) => {
    alertsStore.sortAlerts("created_at");
  });
});
</script>

<style scoped>
#notifications-page {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.notifications-list {
  width: 100%;
  height: calc(100vh - 56px);
  overflow-y: scroll;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>