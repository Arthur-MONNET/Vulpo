// nuxt 3

<template>
  <div id="index-page">
    <Map />
    <Button event="OPEN_POPUP" target="Menu" i="bars" iType="solid" styleTailwind="absolute top-4 left-4 text-gray-700 bg-white h-12 w-12 rounded-full" />
    <Button event="GO_TO" target="search" i="search" iType="solid" styleTailwind="absolute top-4 right-4 text-gray-700 bg-white h-12 w-12 rounded-full" />
    <Button event="FOCUS_ON" target="user" i="location-crosshairs" iType="solid" styleTailwind="absolute bottom-32 left-4 z-10 text-gray-700 bg-white h-12 w-12 rounded-full" :class="mapStore.getIsUserMarkerCentered ? 'slide-in' : 'slide-out'" />
    <MapFooter />
    <ReportingPopup />
    <MenuPopup />
  </div>
</template>

<script setup>
import { useMapStore } from "../stores/map"
const mapStore = useMapStore();
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