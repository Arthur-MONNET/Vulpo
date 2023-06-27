<template>
  <div id="notifications-page">
    <div class="w-full flex flex-col items-center justify-center">
      <NotificationPopup />
    </div>
    <div
      id="header"
      class="fixed w-full flex flex-col items-center justify-end h-[96px] backdrop-filter bg-[#0B1519] bg-opacity-70 z-[100] backdrop-blur-[50px]"
    >
      <!-- font family Goruts -->
      <p
        class="text-[#F0F7F1] text-[32px] font-bold mb-[13px] leading-[32px] uppercase font-['Goruts']"
      >
        Notifications
      </p>
    </div>

    <div
      id="content"
      class="w-full h-full flex flex-col items-center justify-start gap-[16px] pb-[115px] bg-[#1D251E]"
    >
      <p
        class="text-[#A7B9A8] text-[16px] w-full text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-10 mt-[104px]"
      >
        Notifications sur les balises mises en favoris
      </p>
      <div
        class="self-start w-[52px] h-[52px] flex items-center justify-center rounded-[16px] bg-[#2F3C31] ml-[24px] z-10"
      >
        <img
          src="../assets/icons/ArrowBack.svg"
          alt="ArrowBack"
          class="w-[28px] h-[28px] cursor-pointer"
          v-on:click="navigateTo('/map')"
        />
      </div>
      <div
        class="px-[24px] w-full flex items-strech flex-col justify-start z-10 gap-[24px]"
      >
        <div
          class="w-full h-[58px] flex items-center justify-start gap-[32px] bg-[#2F3C31] rounded-[16px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]"
        >
          <div class="flex items-center justify-center h-full w-[108px]">
            <img
              src="../assets/images/Renard_Notif.png"
              alt="Renard_Notif"
              class="w-[108px] h-full rounded-l-[16px]"
            />
            <p class="absolute text-[#F0F7F1] text-[16px] z-10">Semnoz</p>
          </div>
          <div class="flex flex-row items-center justify-start gap-[11px]"
          v-on:click="navigateTo({ path: '/map', query: { lng: 6.110293, lat: 45.774923 } });">
            <img class="w-[24px] h-[22px]" src="../assets/icons/Animal.svg" />
            <div class="flex flex-col items-start justify-center">
              <p class="text-[#F0F7F1] text-[18px] leading-[18px]">{{
              alertsStore.alerts.length > 0
                ? alertsStore.getAlertUIBeacon(
                    alertsStore.alerts[alertsStore.alerts.length - 1]?.reporting
                  ).title
                : "Renard"
            }}</p>
              <p class="text-[#A7B9A8] text-[8px]">{{ alertsStore.alerts.length > 0 ? alertsStore.getTimeText(alertsStore.alerts[0]) : "il y a 1 heure"}}</p>
            </div>
          </div>
        </div>
         <div
          class="w-full h-[58px] flex items-center justify-start gap-[32px] bg-[#2F3C31] rounded-[16px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        >
          <div class="flex items-center justify-center h-full w-[108px]">
            <img
              src="../assets/images/Animal_Blesse_Notif.png"
              alt="Animal_Blesse_Notif"
              class="w-[108px] h-full rounded-l-[16px]"
            />
            <p class="absolute text-[#F0F7F1] text-[16px] z-10">Veyrier</p>
          </div>
          <div class="flex flex-row items-center justify-start gap-[11px]"
          v-on:click="navigateTo({ path: '/map', query: { lng: 6.190606, lat: 45.891490 } });">
            <img class="w-[24px] h-[22px]" src="../assets/icons/BugBeetle.svg" />
            <div class="flex flex-col items-start justify-center">
              <p class="text-[#F0F7F1] text-[18px] leading-[18px]">Animal blessé</p>
              <p class="text-[#A7B9A8] text-[8px]">Il y a 2 heures</p>
            </div>
          </div>
        </div>
         <div
          class="w-full h-[58px] flex items-center justify-start gap-[32px] bg-[#2F3C31] rounded-[16px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]"
        >
          <div class="flex items-center justify-center h-full w-[108px]">
            <img
              src="../assets/images/Canicule_Notif.png"
              alt="Canicule_Notif"
              class="w-[108px] h-full rounded-l-[16px]"
            />
            <p class="absolute text-[#F0F7F1] text-[16px] z-10">Semnoz</p>
          </div>
          <div class="flex flex-row items-center justify-start gap-[11px]"
          v-on:click="navigateTo({ path: '/map', query: { lng: 6.109447, lat: 45.782528 } });">
            <img class="w-[24px] h-[22px]" src="../assets/icons/ThermometerHot.svg" />
            <div class="flex flex-col items-start justify-center">
              <p class="text-[#F0F7F1] text-[18px] leading-[18px]">Canicule</p>
              <p class="text-[#A7B9A8] text-[8px]">Il y a 3 jours</p>
            </div>
          </div>
        </div>
      </div>
      <img
        class="absolute bottom-0 w-full h-[90vh]"
        src="../assets/images/bg_topo_notif.svg"
        alt="bg_topo_notif"
      />
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