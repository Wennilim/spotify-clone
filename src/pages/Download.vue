<script setup lang="ts">
import MyFooter from "../components/MyFooter.vue";
</script>

<template>
  <div class="w-full flex flex-col bg-[#121212] rounded-md gap-6">
    <div
      class="w-full py-20 rounded-md bg-gradient-to-t from-[#121212] to-[#1c2e5a] flex flex-col gap-3 items-center justify-center"
    >
      <img
        class="w-[640px] h-[396px]"
        src="https://open.spotifycdn.com/cdn/images/devices/mac.3fbeb8c6.png"
        alt="mac"
      />
      <h1 class="text-white text-3xl font-bold w-[500px] text-center">
        Seamlessly listen to music you love. Download the Spotify app for your
        computer.
      </h1>
      <a href="https://www.spotify.com/my-en/download/mac/" target="_blank">
        <button
          class="mt-4 bg-[#1ed760] hover:bg-[#5cfc94] hover:scale-105 text-[#111111] font-bold rounded-full px-6 py-3"
        >
          Get our free app
        </button>
      </a>
    </div>
    <MyFooter />
  </div>
</template>
