<script setup lang="ts">
import MyTab from "../components/MyTab.vue";
import AllView from "../pages/AllView.vue";
import MusicView from "../pages/MusicView.vue";
import Podcasts from "../pages/Podcast.vue";

const tabs = [
  { name: "All", content: AllView },
  { name: "Music", content: MusicView },
  { name: "Podcasts", content: Podcasts },
];
</script>

<template>
    <MyTab :tabs="tabs" />
</template>
