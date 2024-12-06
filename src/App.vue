<script setup lang="ts">
import Content from "./components/Content.vue";
import MusicController from "./components/MusicController.vue";
import MyHeader from "./components/MyHeader.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="bg-black h-screen w-screen min-w-fit min-h-fit max-h-screen">
    <MyHeader />
    <div class="flex flex-row">
      <Sidebar />
      <router-view></router-view>
    </div>
    <MusicController />
  </div>
</template>
