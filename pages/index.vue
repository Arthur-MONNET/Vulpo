<template>
  <div class="w-full flex flex-col items-center justify-center">
    <NotificationPopup />
  </div>
  <!-- bg color #0B1519 with opacity 0.7 backdrop-filter backdrop-blur = 50px -->
  <div
    id="header"
    class="fixed w-full flex flex-col items-center justify-end h-[96px] backdrop-filter bg-[#0B1519] bg-opacity-70 z-[100] backdrop-blur-[50px]"
  >
    <!-- font family Goruts -->
    <p
      class="text-[#F0F7F1] text-[32px] font-bold mb-[13px] leading-[32px] uppercase font-['Goruts']"
    >
      Explorer
    </p>
  </div>
  <div
    id="content"
    class="w-full flex flex-col items-center justify-center gap-[40px] pb-[115px] bg-[#1D251E]"
  >
  
    <div class="w-full h-[240px] flex flex-col items-center justify-end z-10">
      <div
        class="w-[342px] h-[48px] rounded-[24px] bg-white z-10 mb-[52px] flex flex-row items-center justify-start gap-[16px] overflow-hidden px-[18px]"
      >
        <img
          src="../assets/icons/Search.svg"
          alt="Search"
          class="w-[24px] h-[24px]"
        />
        <input
          type="text"
          placeholder="Rechercher un itinéraire..."
          class="w-full h-full text-[#282828] text-[14px] placeholder-[#282828]"
        />
      </div>
      <img src="../assets/images/image-header.png" class="w-full absolute" />
    </div>
    <div class="w-full h-[272px] flex flex-col justify-between z-10">
      <p class="text-[#F0F7F1] px-[24px] text-[24px]">Les plus proches</p>
      <div
        class="w-full h-[226px] flex flex-row items-center justify-start gap-[16px] overflow-auto px-[24px]"
      >
        <div
          class="w-[272px] min-w-[272px] h-[224px] flex flex-col items-stretch justify-between"
        >
          <div class="w-full h-[160px] rounded-[16px]">
            <img
              src="../assets/images/Veyrier.png"
              alt="image-card"
              class="w-full h-full rounded-[16px]"
            />
          </div>
          <div
            class="w-full h-[50px] flex flex-row items-start justify-between mb-[4px]"
          >
            <div class="flex flex-col items-start justify-between">
              <p class="text-[#F0F7F1] text-[24px] h-[30px]">Veyrier</p>
              <p class="text-[#A7B9A8] text-[16px] h-[20px]">
                Distance: 13,6km
              </p>
            </div>
            <div
              class="text-[#A7B9A8] text-[16px] flex flex-row gap-[4px] items-center mt-[5px]"
            >
              <span>(2)</span>
              <span class="text-[#F0F7F1]">4,5</span>
              <img src="../assets/icons/Star.svg" class="w-[19px] h-[20px]" />
            </div>
          </div>
        </div>
        <div
          class="w-[272px] min-w-[272px] h-[223px] flex flex-col items-stretch justify-between"
        >
          <div class="w-full h-[160px] rounded-[16px]">
            <img
              src="../assets/images/Semnoz.png"
              alt="image-card"
              class="w-full h-full rounded-[16px]"
            />
          </div>
          <div
            class="w-full h-[50px] flex flex-row items-start justify-between mb-[4px]"
          >
            <div class="flex flex-col items-start justify-between">
              <p class="text-[#F0F7F1] text-[24px] h-[30px]">Semnoz</p>
              <p class="text-[#A7B9A8] text-[16px] h-[20px]">
                Distance: 17,2km
              </p>
            </div>
            <div
              class="text-[#A7B9A8] text-[16px] flex flex-row gap-[4px] items-center mt-[5px]"
            >
              <span>(3)</span>
              <span class="text-[#F0F7F1]">5</span>
              <img src="../assets/icons/Star.svg" class="w-[19px] h-[20px]" />
            </div>
          </div>
        </div>
        <div
          class="w-[272px] min-w-[272px] h-[223px] flex flex-col items-stretch justify-between"
        >
          <div class="w-full h-[160px] rounded-[16px]">
            <img
              src="../assets/images/Les_Bauges.png"
              alt="image-card"
              class="w-full h-full rounded-[16px]"
            />
          </div>
          <div
            class="w-full h-[50px] flex flex-row items-start justify-between mb-[4px]"
          >
            <div class="flex flex-col items-start justify-between">
              <p class="text-[#F0F7F1] text-[24px] h-[30px]">Les Bauges</p>
              <p class="text-[#A7B9A8] text-[16px] h-[20px]">
                Distance: 32,6km
              </p>
            </div>
            <div
              class="text-[#A7B9A8] text-[16px] flex flex-row gap-[4px] items-center mt-[5px]"
            >
              <span>(2)</span>
              <span class="text-[#F0F7F1]">4,7</span>
              <img src="../assets/icons/Star.svg" class="w-[19px] h-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[116px] w-full flex items-center justify-center px-[24px] z-10">
      <p
        class="bg-[#FFB526] text-[#0B1519] h-[40px] rounded-[24px] flex items-center justify-center text-[16px] px-[20px] py-[10px] z-10"
      >
        Accédez à la map
      </p>
      <img
        class="absolute rounded-[16px]"
        src="../assets/images/screen_map.png"
      />
    </div>
    <div class="w-full h-[138px] flex flex-col justify-between z-10">
      <p class="text-[#F0F7F1] px-[24px] text-[24px]">Catégories</p>
      <div
        class="w-full h-[92px] flex flex-row items-center justify-start gap-[16px] overflow-auto px-[24px]"
      >
        <div
          class="w-[172px] min-w-[172px] h-[90px] flex flex-col items-center justify-center rounded-[16px] bg-[#1E2E34]"
        >
          <p
            class="text-[#F0F7F1] text-[24px] uppercase font-[Goruts] text-center"
          >
            Montagne
          </p>
        </div>
        <div
          class="w-[172px] min-w-[172px] h-[90px] flex flex-col items-center justify-center rounded-[16px] bg-[#1E2E34]"
        >
          <p
            class="text-[#F0F7F1] text-[24px] uppercase font-[Goruts] text-center"
          >
            Forêt
          </p>
        </div>
        <div
          class="w-[172px] min-w-[172px] h-[90px] flex flex-col items-center justify-center rounded-[16px] bg-[#1E2E34]"
        >
          <p
            class="text-[#F0F7F1] text-[24px] uppercase font-[Goruts] text-center"
          >
            Parc <br />
            naturel
          </p>
        </div>
        <div
          class="w-[172px] min-w-[172px] h-[90px] flex flex-col items-center justify-center rounded-[16px] bg-[#1E2E34]"
        >
          <p
            class="text-[#F0F7F1] text-[24px] uppercase font-[Goruts] text-center"
          >
            Lac
          </p>
        </div>
      </div>
    </div>
    <div class="w-full h-[240px] flex flex-col justify-between z-10">
      <p class="text-[#F0F7F1] px-[24px] text-[24px]">Zones balisées</p>
      <div
        class="w-full h-[196px] flex flex-row items-center justify-start gap-[16px] overflow-auto px-[24px]"
      >
        <div
          class="w-[160px] min-w-[160px] h-[194px] flex flex-col items-stretch justify-between"
        >
          <div
            class="w-full h-[160px] rounded-[16px] flex items-center justify-center"
          >
            <img
              src="../assets/icons/Vulpo.svg"
              alt="image-card"
              class="w-[48px] h-[72px] z-10 mr-[-104px] ml-[56px]"
            />
            <img
              src="../assets/images/Semnoz_xs.png"
              alt="image-card"
              class="w-full h-full rounded-[16px]"
            />
          </div>
          <div
            class="w-full h-[50px] flex flex-row items-center justify-between mb-[4px] text-[#F0F7F1]"
          >
            <p class="text-[18px]">Semnoz</p>
            <div class="text-[18px] flex flex-row gap-[4px] items-center">
              <span>2</span>
              <img
                src="../assets/icons/VulpoBeacon.svg"
                class="w-[16px] h-[24px]"
              />
            </div>
          </div>
        </div>

        <div
          class="w-[160px] min-w-[160px] h-[194px] flex flex-col items-stretch justify-between"
        >
          <div
            class="w-full h-[160px] rounded-[16px] flex items-center justify-center"
          >
            <img
              src="../assets/icons/Vulpo.svg"
              alt="image-card"
              class="w-[48px] h-[72px] z-10 mr-[-104px] ml-[56px]"
            />
            <img
              src="../assets/images/Veyrier_xs.png"
              alt="image-card"
              class="w-full h-full rounded-[16px]"
            />
          </div>
          <div
            class="w-full h-[50px] flex flex-row items-center justify-between mb-[4px] text-[#F0F7F1]"
          >
            <p class="text-[18px]">Veyrier</p>
            <div class="text-[18px] flex flex-row gap-[4px] items-center">
              <span>1</span>
              <img
                src="../assets/icons/VulpoBeacon.svg"
                class="w-[16px] h-[24px]"
              />
            </div>
          </div>
        </div>

        <div
          class="w-[160px] min-w-[160px] h-[194px] flex flex-col items-stretch justify-between"
        >
          <div
            class="w-full h-[160px] rounded-[16px] flex items-center justify-center"
          >
            <img
              src="../assets/icons/Vulpo.svg"
              alt="image-card"
              class="w-[48px] h-[72px] z-10 mr-[-104px] ml-[56px]"
            />
            <img
              src="../assets/images/Les_Bauges_xs.png"
              alt="image-card"
              class="w-full h-full rounded-[16px]"
            />
          </div>
          <div
            class="w-full h-[50px] flex flex-row items-center justify-between mb-[4px] text-[#F0F7F1]"
          >
            <p class="text-[18px]">Les Bauges</p>
            <div class="text-[18px] flex flex-row gap-[4px] items-center">
              <span>3</span>
              <img
                src="../assets/icons/VulpoBeacon.svg"
                class="w-[16px] h-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-[272px] flex flex-col justify-between z-10">
      <p class="text-[#F0F7F1] px-[24px] text-[24px]">Les plus proches</p>
      <div
        class="w-full h-[226px] flex flex-row items-center justify-start gap-[16px] overflow-auto px-[24px]"
      >
        <div
          class="w-[272px] min-w-[272px] h-[223px] flex flex-col items-stretch justify-between"
        >
          <div class="w-full h-[160px] rounded-[16px]">
            <img
              src="../assets/images/Semnoz.png"
              alt="image-card"
              class="w-full h-full rounded-[16px]"
            />
          </div>
          <div
            class="w-full h-[50px] flex flex-row items-start justify-between mb-[4px]"
          >
            <div class="flex flex-col items-start justify-between">
              <p class="text-[#F0F7F1] text-[24px] h-[30px]">Semnoz</p>
              <p class="text-[#A7B9A8] text-[16px] h-[20px]">
                Distance: 17,2km
              </p>
            </div>
            <div
              class="text-[#A7B9A8] text-[16px] flex flex-row gap-[4px] items-center mt-[5px]"
            >
              <span>(3)</span>
              <span class="text-[#F0F7F1]">5</span>
              <img src="../assets/icons/Star.svg" class="w-[19px] h-[20px]" />
            </div>
          </div>
        </div>
        <div
          class="w-[272px] min-w-[272px] h-[223px] flex flex-col items-stretch justify-between"
        >
          <div class="w-full h-[160px] rounded-[16px]">
            <img
              src="../assets/images/Chartreuse.png"
              alt="image-card"
              class="w-full h-full rounded-[16px]"
            />
          </div>
          <div
            class="w-full h-[50px] flex flex-row items-start justify-between mb-[4px]"
          >
            <div class="flex flex-col items-start justify-between">
              <p class="text-[#F0F7F1] text-[24px] h-[30px]">Chartreuse</p>
              <p class="text-[#A7B9A8] text-[16px] h-[20px]">Distance: 86km</p>
            </div>
            <div
              class="text-[#A7B9A8] text-[16px] flex flex-row gap-[4px] items-center mt-[5px]"
            >
              <span>(8)</span>
              <span class="text-[#F0F7F1]">4,9</span>
              <img src="../assets/icons/Star.svg" class="w-[19px] h-[20px]" />
            </div>
          </div>
        </div>
        <div
          class="w-[272px] min-w-[272px] h-[224px] flex flex-col items-stretch justify-between"
        >
          <div class="w-full h-[160px] rounded-[16px]">
            <img
              src="../assets/images/Veyrier.png"
              alt="image-card"
              class="w-full h-full rounded-[16px]"
            />
          </div>
          <div
            class="w-full h-[50px] flex flex-row items-start justify-between mb-[4px]"
          >
            <div class="flex flex-col items-start justify-between">
              <p class="text-[#F0F7F1] text-[24px] h-[30px]">Veyrier</p>
              <p class="text-[#A7B9A8] text-[16px] h-[20px]">
                Distance: 13,6km
              </p>
            </div>
            <div
              class="text-[#A7B9A8] text-[16px] flex flex-row gap-[4px] items-center mt-[5px]"
            >
              <span>(2)</span>
              <span class="text-[#F0F7F1]">4,5</span>
              <img src="../assets/icons/Star.svg" class="w-[19px] h-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="absolute w-full h-[1600px]" src="../assets/images/bg_topo.svg" />
  </div>
  <div
    id="bar_menu"
    class="fixed bottom-0 w-full flex flex-row items-center justify-center h-[90px] z-[100]"
  >
    <div
      class="flex flex-col items-center justify-center w-[90px] h-[56px] z-20"
    >
      <img
        src="../assets/icons/GlobeHemisphereWest.svg"
        alt="GlobeHemisphereWest"
        class="w-[32px] h-[32px]"
      />
      <p class="text-[#F0F7F1] text-[14px]">Explorer</p>
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
    >
      <img
        src="../assets/icons/MapPin.svg"
        alt="MapPin"
        class="w-[32px] h-[32px]"
      />
      <p class="text-[#A7B9A8] text-[14px]">Map</p>
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
      class="absolute w-full h-full backdrop-filter bg-[#1D251E] bg-opacity-70 backdrop-blur-[50px] rounded-tl-[24px] rounded-tr-[24px] z-10"
    ></div>
    <div
      class="absolute w-full h-[186px] bg-gradient-to-t from-[#1D251E] to-transparent"
    ></div>
  </div>
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

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>