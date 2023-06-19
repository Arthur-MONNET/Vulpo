<!-- HeaderPage.vue -->

<template>
  <div class="header-page">
    <div class="header-page-back">
      <Button
        event="GO_TO"
        target=""
        i="arrow-left"
        iType="solid"
        styleTailwind="text-gray-700 bg-white h-12 w-12 rounded-full"
      />
    </div>
    <div class="header-page-title">
      <h1 class="header-page-title-text">{{ title }}</h1>
    </div>
  </div>
</template>

<script setup>
const { title } = defineProps({
  title: String,
});
</script>

<style scoped>
.header-page {
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  z-index: 10;
}

.header-page-back {
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-page-title {
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}

.header-page-title-text {
  font-size: 16px;
  font-weight: 700;
  color: #3d4a5c;
}
</style>