// nuxt 3

<template>
  <div id="index-page">
    <Map :lng="route.query.lng || ''" :lat="route.query.lat || ''" />
    <img
      class="fixed top-[140px] left-[22px] h-[32px] w-[32px]"
      src="../assets/icons/Bousole.svg"
      alt="Bousole"
    />
    <img
      class="fixed top-[77px] left-[19px] h-[37px] w-[39px]"
      v-on:click="navigateTo('/notifications')"
      src="../assets/icons/Bell3.svg"
      alt="Bell3"
    />
    <img
      class="fixed bottom-[111px] right-[28px] h-[74px] w-[74px] bg-[#FFB526] rounded-full px-[12px] pb-[4px]"
      src="../assets/icons/Warning.svg"
      alt="Warning"
    />
    <img
      src="../assets/icons/CrosshairSimple.svg"
      class="fixed bottom-[204px] right-[-40px] h-[36px] w-[36px]"
      alt="CrosshairSimple"
      :class="mapStore.getIsUserMarkerCentered ? 'slide-in' : 'slide-out'"
      v-on:click="mapStore.focusOnByName('user')"
    />
    <div
      class="fixed top-[60px] right-[-272px] h-[92px] w-[272px] bg-[#1D251E66] rounded-[16px] px-[22px] py-[16px] backdrop-filter backdrop-blur-[50px]"
      :class="
        mapStore.getIsMarkerCentered('zone_Semnoz')
          ? 'slide-in-2'
          : 'slide-out-2'
      "
    >
      <div class="flex flex-row items-center justify-between gap-[22px] w-min">
        <img
          src="../assets/images/Fox.png"
          alt="Fox"
          class="h-[100%] w-[auto]"
        />
        <div class="flex flex-col items-start justify-center">
          <p
            class="text-[#F0F7F1] text-[26px] font-[Goruts] uppercase leading-[26px] whitespace-nowrap"
          >
            {{
              alertsStore.alerts.length > 0
                ? alertsStore.getAlertUIBeacon(
                    alertsStore.alerts[alertsStore.alerts.length - 1]?.reporting
                  ).title
                : ""
            }}
          </p>
          <p class="text-[#79957C] text-[14px] whitespace-nowrap">
            {{
              alertsStore.alerts.length > 0
                ? alertsStore.getTimeText(
                    alertsStore.alerts[alertsStore.alerts.length - 1]
                  )
                : ""
            }}
          </p>
        </div>
      </div>
      <!-- <img src="../assets/icons/Close.svg" alt="Close" class="absolute top-[13px] right-[13px] h-[12px] w-[12px]"/> -->
    </div>
    <div
      class="fixed top-[60px] right-[-272px] h-[92px] w-[272px] bg-[#1D251E66] rounded-[16px] px-[22px] py-[16px] backdrop-filter backdrop-blur-[50px]"
      :class="
        mapStore.getIsMarkerCentered('canicule') ? 'slide-in-2' : 'slide-out-2'"
    >
      <div class="flex flex-row items-center justify-between gap-[22px] w-min">
        <img
          src="../assets/images/Fox.png"
          alt="Fox"
          class="h-[100%] w-[auto]"
        />
        <div class="flex flex-col items-start justify-center">
          <p
            class="text-[#F0F7F1] text-[26px] font-[Goruts] uppercase leading-[26px] whitespace-nowrap"
          >
            Canicule
          </p>
          <p class="text-[#79957C] text-[14px] whitespace-nowrap">
            Il y a 3 jours
          </p>
        </div>
      </div>
      <!-- <img src="../assets/icons/Close.svg" alt="Close" class="absolute top-[13px] right-[13px] h-[12px] w-[12px]"/> -->
    </div>
    <div
      class="fixed top-[60px] right-[-272px] h-[92px] w-[272px] bg-[#1D251E66] rounded-[16px] px-[22px] py-[16px] backdrop-filter backdrop-blur-[50px]"
      :class="
        mapStore.getIsMarkerCentered('animal_blesse') ? 'slide-in-2' : 'slide-out-2'"
    >
      <div class="flex flex-row items-center justify-between gap-[22px] w-min">
        <img
          src="../assets/images/Fox.png"
          alt="Fox"
          class="h-[100%] w-[auto]"
        />
        <div class="flex flex-col items-start justify-center">
          <p
            class="text-[#F0F7F1] text-[20px] font-[Goruts] uppercase leading-[20px] whitespace-nowrap"
          >
            Animal blessé
          </p>
          <p class="text-[#79957C] text-[14px] whitespace-nowrap">
            Il y a 2 heures
          </p>
        </div>
      </div>
      <!-- <img src="../assets/icons/Close.svg" alt="Close" class="absolute top-[13px] right-[13px] h-[12px] w-[12px]"/> -->
    </div>
    <div
      id="bar_menu"
      class="fixed bottom-0 w-full flex flex-row items-center justify-center h-[90px] z-[100]"
    >
      <div
        class="flex flex-col items-center justify-center w-[90px] h-[56px] z-20"
        v-on:click="navigateTo('/')"
      >
        <img
          src="../assets/icons/GlobeHemisphereWest.svg"
          alt="GlobeHemisphereWest"
          class="w-[32px] h-[32px]"
        />
        <p class="text-[#A7B9A8] text-[14px]">Explorer</p>
      </div>
      <div
        class="flex flex-col items-center justify-center w-[90px] h-[56px] z-20"
      >
        <img
          src="../assets/icons/Users.svg"
          alt="Users"
          class="w-[32px] h-[32px]"
        />
        <p class="text-[#A7B9A8] text-[14px]">Communauté</p>
      </div>
      <div
        class="flex flex-col items-center justify-center w-[90px] h-[56px] z-20"
        v-on:click="navigateTo('/map')"
      >
        <img
          src="../assets/icons/MapPin_select.svg"
          alt="MapPin"
          class="w-[32px] h-[32px]"
        />
        <p class="text-[#F0F7F1] text-[14px]">Map</p>
      </div>
      <div
        class="flex flex-col items-center justify-center w-[90px] h-[56px] z-20"
      >
        <img
          src="../assets/icons/User.svg"
          alt="User"
          class="w-[32px] h-[32px]"
        />
        <p class="text-[#A7B9A8] text-[14px]">Profil</p>
      </div>
      <div
        class="absolute w-full h-full backdrop-filter bg-[#1D251E] bg-opacity-30 backdrop-blur-[50px] rounded-tl-[24px] rounded-tr-[24px] z-10"
      ></div>
      <div
        class="absolute w-full h-[186px] bg-gradient-to-t from-[#1D251E] to-transparent pointer-events-none"
      ></div>
    </div>
    <ReportingPopup />
    <MenuPopup />
    <NotificationPopup />
  </div>
</template>

<script setup>
const route = useRoute();

import { usePopupStore } from "../stores/popup";
import { useMapStore } from "../stores/map";
import { useAlertsStore } from "../stores/alerts";

const popupStore = usePopupStore();
const mapStore = useMapStore();
const alertsStore = useAlertsStore();

onMounted(async () => {
  alertsStore.$subscribe(async (mutations, state) => {
    const alert = alertsStore.getNewAlert;
    if (!alert) return;
    if (popupStore.getData("Notification")) {
      if (alert.id == popupStore.getData("Notification").id) return;
    }
    popupStore.closePopup("Notification");
    await sleep(600);
    popupStore.openPopup("Notification", alert);
    await sleep(6000);
    popupStore.closePopup("Notification");
  });
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
</script>

<style scoped>
#index-page {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>