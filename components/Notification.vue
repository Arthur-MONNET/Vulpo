<template>
  <div class="notification" :class="isOpened ? '' : 'border-solid border-2 border-[#FFB526]'">
    <div class="notification-left">
      <i :class="icon"></i>
    </div>
    <div class="notification-right">
      <h3 class="notification-right-title">{{ title }}</h3>
      <div class="notification-right-text">Il y a {{ timeText }}</div>
    </div>
  </div>
</template>

<script setup>
const { icon, title, timeText, isOpened } = defineProps({
  icon: String,
  title: String,
  timeText: String,
  isOpened: Boolean,
});
</script>

<style scoped>
.notification {
  background-color: #3d4a5c;
  width: 100%;
  height: 80px;
  min-height: 80px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  border-radius: 8px;
}

.notification .notification-left {
  position: relative;
  height: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
}

.notification .notification-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 24px;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.notification .notification-right-title {
  font-size: 16px;
  font-weight: 700;
  pointer-events: none;
}

.notification .notification-right-text {
  font-size: 12px;
  font-weight: 400;
  color: rgb(0, 0, 0);
  pointer-events: none;
}
</style>