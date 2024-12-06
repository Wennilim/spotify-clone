<script setup lang="ts">
import SpotifyIcon from "../icons/SpotifyIcon.vue";
import HomeIcon from "../icons/HomeIcon.vue";
import SearchIcon from "../icons/SearchIcon.vue";
import FileIcon from "../icons/FileIcon.vue";
import InstallIcon from "../icons/InstallIcon.vue";
import BellIcon from "../icons/BellIcon.vue";
import { ref, watch } from "vue";
import Dropdown from "./Dropdown.vue";

const windowWidth = ref(window.innerWidth);
watch(windowWidth, () => {
  windowWidth.value = window.innerWidth;
});

const settingsLinks = [
  {
    href: "/account",
    label: "Account",
    icon: "pi pi-window-maximize",
  },
  {
    href: "/profile",
    label: "Profile",
    icon: "pi pi-user",
  },
  {
    href: "/setting",
    label: "Settings",
    icon: "pi pi-cog",
  },
  {
    href: "",
    label: "Log Out",
  },
];
</script>

<template>
  <div class="flex justify-between px-6 bg-black">
    <SpotifyIcon
      class="w-8 h-8 self-center cursor-pointer"
      color="#1DB954"
      @click="$router.push('/')"
    />

    <div class="flex gap-2 my-2" v-if="windowWidth > 600">
      <div
        class="bg-[#202020] rounded-full flex items-center p-2 hover:scale-105"
      >
        <HomeIcon
          class="w-6 h-6 cursor-pointer"
          color="#ffffff"
          @click="$router.push('/')"
        />
      </div>
      <div
        @click="$router.push('/search')"
        class="flex items-center gap-2 bg-[#202020] rounded-full p-2 border border-[#202020] hover:border-[#b3b3b3] transition-all duration-300 ease-in-out cursor-pointer"
      >
        <SearchIcon class="w-6 h-6" color="#b3b3b3" />
        <input
          type="text"
          class="bg-[#202020] text-[#b3b3b3] w-60"
          placeholder="What do you want to play?"
        />
        <span class="bg-[#b3b3b3] w-0.5 h-full"></span>
        <FileIcon class="w-6 h-6" color="#ffffff" />
      </div>
    </div>

    <div class="flex items-center gap-6">
      <div
        class="flex items-center gap-2 hover:scale-105 cursor-pointer"
        @click="$router.push('/download')"
      >
        <InstallIcon class="w-4 h-4" color="#ffffff" />
        <span v-if="windowWidth > 768" class="text-white text-sm font-[500]">
          Install App
        </span>
      </div>

      <BellIcon
        class="w-4 h-4 hover:text-white cursor-pointer"
        color="#b3b3b3b3"
        @click="$router.push('/notifications')"
      />

      <Dropdown :links="settingsLinks">
        <div class="p-2 rounded-full bg-[#202020] cursor-pointer">
          <img
            class="w-8 h-8 rounded-full"
            src="https://i.pravatar.cc/150?img=3"
          />
        </div>
      </Dropdown>
    </div>
  </div>
</template>
