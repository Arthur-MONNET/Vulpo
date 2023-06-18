<!-- Button.vue -->
<!-- ex call : <Button event="GO_TO" target="explore" text="Explorer" textStyleTailwind="" i="earth-americas" iType="light" styleTailwind="text-white w-1/5 ratio-1/1" />
<Button event="OPEN_POPUP" target="Menu" i="bars" iType="solid" styleTailwind="absolute top-4 left-4 text-gray-700 bg-white h-12 w-12 rounded-full" />
<Button event="GO_TO" target="search" i="search" iType="solid" styleTailwind="" />
<Button envent="FOCUS_ON" target="user" i="location-arrow" iType="solid" styleTailwind="" /> -->

<template>
  <button :class="styleTailwind" @click="clickEvent()" :data-event="event" :data-target="target">
    <i v-if="i" :class="`fa-${i} fa-${iType || 'solid'} pointer-events-none`"></i>
    <span v-if="text" :class="textStyleTailwind + ' pointer-events-none'">{{ text }}</span>
  </button>
</template>

<script setup>
const { event, target, text, textStyleTailwind, i, iType, styleTailwind } =
  defineProps({
    event: String,
    target: String,
    text: String,
    textStyleTailwind: String,
    i: String,
    iType: String,
    styleTailwind: String,
  });

import { usePopupStore } from "../stores/popup";
import { useMapStore } from "../stores/map"
const popupStore = usePopupStore();
const mapStore = useMapStore();

function clickEvent() {
  switch (event) {
    case "GO_TO":
      navigateTo("/" + target);
      break;
    case "OPEN_POPUP":
      popupStore.openPopup(target);
      break;
    case "FOCUS_ON":
      mapStore.focusOnByName(target);
      break;
    default:
      break;
  }
};
</script>

<style>
.slide-in {
  transform: translateX(-150%);
  transition: transform 0.1s ease-in-out;
}

.slide-out {
  transform: translateX(0%);
  transition: transform 0.3s ease-in-out;
}
</style>