// nuxt 3

<template>
  <div id="index-page">
    <Map />
    <OpenPopupButton popup="Menu" i="bars" />
    <GoToButton page="search" i="search" />
    <ButtonFocusUser b="28" l="4" />
    <MapFooter />
    <ReportingPopup />
    <MenuPopup />
  </div>
</template>

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