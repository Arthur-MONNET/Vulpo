<template>
  <div
    class="notification flex flex-col items-strech justify-between w-full h-full px-[15px] py-[12px] bg-[#282828] rounded-[8px] shadow-[0px 0px 10px rgba(0, 0, 0, 0.2)]"
  >
    <div class="notification-top flex flex-row items-center justify-between">
      <div class="flex flex-row items-center justify-start gap-[6px]">
        <img
          src="../assets/icons/AppVulpo.svg"
          alt="AppVulpo"
          class="w-[24px] h-[24px]"
        />
        <p class="text-[#FFFFFF8F] text-[SF Pro Text] text-[14px] uppercase">
          Vulpo
        </p>
      </div>
      <p class="text-[#FFFFFF8F] text-[SF Pro Text] text-[14px]">
        {{ timeText || "maintenant" }}
      </p>
    </div>
    <p class="text-white text-[SF Pro Text] text-[17px] text-bold">
      {{ text || "" }}
    </p>
  </div>
</template>

<script setup>
const { timeText, text } = defineProps({
  timeText: String,
  text: String,
});

</script>