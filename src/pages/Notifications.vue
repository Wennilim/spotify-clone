<script setup lang="ts">
import MyTab from "../components/MyTab.vue";
import Music from "../views/Music.vue";
import Podcasts from "../views/PodCast.vue";
import MyFooter from "../components/MyFooter.vue";

const tabs = [
  { name: "Music", content: Music },
  { name: "Podcasts & Show", content: Podcasts },
];
</script>

<template>
  <div class="w-full rounded-md bg-[#202020]">
    <div class="flex mt-20 justify-center items-center">
      <div class="flex flex-col min-w-[750px]">
        <h1 class="text-white text-3xl font-bold">What’s New</h1>
        <span class="text-[#b3b3b3] text-sm"
          >The latest releases from artists, podcasts and shows you
          follow.</span
        >
        <MyTab :tabs="tabs" />
      </div>
    </div>
    <MyFooter />
  </div>
</template>
