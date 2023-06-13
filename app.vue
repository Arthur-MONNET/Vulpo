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
import { usePopupStore } from "./stores/popup";
const alertsStore = useAlertsStore();
const popupStore = usePopupStore();

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
  document.addEventListener("click", (e) => {
    // récupérer l'objet cliqué,
    // verifier si il possède une classe "<popupName>-popup"
    // popupName = nom de property de l'objet popupStore.popups
    // sinon verifier sur les parents si il possède une classe "<popupName>-popup"
    // si oui, fermer toutes les popups exepté celle cliquée
    // si non, fermer toutes les popups
    for (const popupName in popupStore.popups) {
      console.log("element cliqué : ", e.target);
      console.log("popup : ", popupName);
      console.log(
        "popup parent : ",
        e.target.closest(`[class*=${popupName.toLocaleLowerCase()}-popup]`)
      );
      if (
        e.target.closest(`[class*=${popupName.toLocaleLowerCase()}-popup]`) ||
        (e.target.dataset.event === "OPEN_POPUP" &&
          e.target.dataset.target === popupName)
      ) {
        console.log("close all popups except ", popupName);
        popupStore.closeAllPopupsExcept(popupName);
        return;
      }
    }
    console.log("close all popups");
    popupStore.closeAllPopups();
  });
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