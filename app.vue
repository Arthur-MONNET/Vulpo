<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

<script setup>

const { $ws } = useNuxtApp();
import { useAlertsStore } from "./stores/alerts";
const alertsStore = useAlertsStore();


onMounted(() => {
  // lorsque la connexion est établie, envoyer un message au serveur
  $ws.onopen = () => {
    $ws.send(
      JSON.stringify({
        sender: "app",
        type: "connect",
        payload: {
          userId: 1,
        },
      })
    );
  };
  $ws.onmessage = handleMessage;
  $ws.onclose = () => {
    console.log("disconnected");
  };
});

function handleMessage({ data }) {
  const { type, payload } = JSON.parse(data);
  switch (type) {
    case "alerts":
      alertsStore.setAlerts(payload);
      alertsStore.sortAlerts("latitude");
      break;
    default:
      break;
  }
}

</script>