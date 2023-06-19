<template>
    <footer class="pointer-events-none w-full h-56 bottom-0 flex flex-col justify-end items-center fixed bg-gradient-to-b from-transparent to-[#0C0B0A] px-10 z-20">
        <div class="h-20 max-h-[5rem] flex bg-[#3D4A5C] pointer-events-auto justify-around items-center px-3 mb-8 rounded-full z-10 bottom-0 w-full">
            <Button event="GO_TO" target="explore" text="Explorer" textStyleTailwind="text-sm" i="earth-americas" iType="solid" styleTailwind="text-white text-2xl w-1/5 aspect-square flex flex-col items-center justify-center gap-1" />
            <Button event="GO_TO" target="" i="map" iType="regular" styleTailwind="text-white text-3xl h-20 aspect-square flex flex-col items-center justify-center rounded-full bg-[#FFB526] mt-[-40px] drop-shadow-2xl" />
            <Button event="GO_TO" target="notifications" text="Notifs" i="bell" iType="solid" styleTailwind="text-white text-2xl w-1/5 aspect-square flex flex-col items-center justify-center gap-1 after:content-[attr(nbnotif)]" textStyleTailwind="text-sm" :nbnotif="alertsStore.getUnreadAlerts.length || ''" :class="alertsStore.getUnreadAlerts.length > 0 ? 'after-nb-notifs' : 'no-after-nb-notifs'" />
        </div>
    </footer>
</template>

<script setup>
import { usePopupStore } from "../stores/popup";
import { useAlertsStore } from "../stores/alerts";
import { useMapStore } from "../stores/map";

const popupStore = usePopupStore();
const alertsStore = useAlertsStore();
const mapStore = useMapStore();

</script>