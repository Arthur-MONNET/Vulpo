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
    for (const popupName in popupStore.popups) {
      if (
        e.target.closest(`[class*=${popupName.toLocaleLowerCase()}-popup]`) ||
        (e.target.dataset.event === "OPEN_POPUP" &&
          e.target.dataset.target === popupName)
      ) {
        popupStore.closeAllPopupsExcept(popupName);
        return;
      }
    }
    popupStore.closeAllPopups();
  });
});

function handleMessage({ data }) {
  const { type, payload } = JSON.parse(data);
  switch (type) {
    case "alerts":
      alertsStore.setAlerts(payload);
      break;
    default:
      break;
  }
}
</script>

<style>

/* font Goruts */
@font-face {
  font-family: "Goruts";
  src: url("./assets/fonts/Goruts.ttf");
  font-weight: normal;
  font-style: normal;
}

/* font Outfit ./assets/fonts/Outfit-VariableFont_wght.ttf */
@font-face {
  font-family: "Outfit";
  src: url("./assets/fonts/Outfit-VariableFont_wght.ttf");
  font-weight: normal;
  font-style: normal;
}

/* font SF Pro Text bold and medium */
@font-face {
  font-family: "SF Pro Text";
  src: url("./assets/fonts/SF-Pro-Text-Bold.otf");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Text";
  src: url("./assets/fonts/SF-Pro-Text-Medium.otf");
  font-weight: medium;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Outfit";
}

html,
body,
#__nuxt,
#__nuxt > div {
  height: 100%;
  width: 100%;
}
</style>