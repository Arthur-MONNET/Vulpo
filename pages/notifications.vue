<template>
  <div id="notifications-page">
    <HeaderPage :title="'Notifications'" />
    <div class="notifications-list">
        <!-- sort les notification en fonction de la date de création mais en metant en haut une seule notification par avec le status "beacon-reconition" puis que des notifications avec le status "marker" -->
      <Notification
        v-for="alert in alertsStore.getAndSortAlertsBy('created_at_with_beacon_first')"
        :key="alert.id"
        :icon="alert.status==='marker' ? alertsStore.getAlertUI(alert.reporting).icon : alertsStore.getAlertUIBeacon(alert.reporting).icon"
        :title="alert.status==='marker' ? alertsStore.getAlertUI(alert.reporting).title : alertsStore.getAlertUIBeacon(alert.reporting).title"
        :timeText="alertsStore.getTimeText(alert)"
        :isOpened="alertsStore.isAlreadyOpen(alert)"
        :status="alert.status"
        v-on:click="alertsStore.setAlertAsOpen(alert), navigateTo(alert.status==='marker' ? { path: '/', query: { lng: alert.longitude, lat: alert.latitude } } : '/explore/' + alert.location + (alert.isAnimals ? '/' + alert.animal : ''))"
      />
    </div>
    <PageFooter/>
  </div>
</template>

<script setup>
import { on } from "events";
import { useAlertsStore } from "../stores/alerts";

const alertsStore = useAlertsStore();
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
  padding-bottom: 10rem;
}
</style>