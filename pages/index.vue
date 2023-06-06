// nuxt 3

<template>
  <div>
    <Map />
    <OpenPopupButton popup="Menu" i="bars" />
    <GoToButton page="search" i="search" />
    <ButtonFocusUser b="28" l="4" />
    <Footer>
      <BgFooter />
      <ContentFooter />
    </Footer>
    <ReportingPopup />
    <MenuPopup />
  </div>
</template>

<style scoped>

div {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
}
</style>    