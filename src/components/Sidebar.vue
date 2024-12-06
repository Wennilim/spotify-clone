<script setup lang="ts">
import LibraryIcon from "../icons/LibraryIcon.vue";
import IconHeart from "vue-material-design-icons/Heart.vue";
import IconPlus from "vue-material-design-icons/Plus.vue";
import IconArrowRight from "vue-material-design-icons/ArrowRight.vue";
import IconArrowLeft from "vue-material-design-icons/ArrowLeft.vue";
import SearchIcon from "../icons/SearchIcon.vue";
import ListBulletedIcon from "../icons/ListBulletedIcon.vue";
import { ref, nextTick } from "vue";
import Dropdown from "./Dropdown.vue";

const playlistLinks = [
  {
    href: "/create-playlist",
    label: "Create a new playlist",
    icon: "pi pi-list",
  },
  {
    href: "/create-playlist-folder",
    label: "Create a playlist folder",
    icon: "pi pi-folder-plus",
  },
];

const expanded = ref(false);
const sidebarWidth = ref("25vw");
const isOpen = ref(false);

const inputField = ref<HTMLInputElement | null>(null);
const toggleExpanded = () => {
  expanded.value = !expanded.value;
};
const expandSidebarWidth = () => {
  sidebarWidth.value = "40vw";
};
const collapseSidebarWidth = () => {
  sidebarWidth.value = "25vw";
};

const handleLibraryClick = () => {
  toggleExpanded();
  collapseSidebarWidth();
};

const handleClickSearch = async () => {
  isOpen.value = !isOpen.value;
  await nextTick();
  if (inputField.value) {
    inputField.value.focus();
  }
};
</script>

<template>
  <div class="bg-[#202020] min-h-[85vh] p-2 mx-3 rounded-md">
    <div class="flex items-center justify-center">
      <LibraryIcon
        class="w-6 h-6 my-2 hover:text-white cursor-pointer"
        color="#b3b3b3"
        @click="toggleExpanded"
        v-if="!expanded"
      />
    </div>

    <div
      :class="['flex', 'flex-col']"
      :style="{ width: `${sidebarWidth}` }"
      v-if="expanded"
    >
      <div class="flex justify-between">
        <div
          class="flex p-2 gap-2 cursor-pointer justify-center items-center hover:text-white text-[#b3b3b3]"
          @click="handleLibraryClick"
        >
          <LibraryIcon class="w-4 h-4 my-2" />
          <span class="text-sm font-semibold content-center">Your Library</span>
        </div>

        <div class="flex gap-3 self-center">
          <Dropdown :links="playlistLinks">
            <IconPlus class="hover:text-white text-[#b3b3b3] cursor-pointer" />
          </Dropdown>
          <IconArrowRight
            class="hover:text-white text-[#b3b3b3] cursor-pointer"
            @click="expandSidebarWidth"
            v-if="sidebarWidth === '25vw'"
          />
          <IconArrowLeft
            class="hover:text-white text-[#b3b3b3] cursor-pointer"
            @click="collapseSidebarWidth"
            v-else
          />
        </div>
      </div>

      <div
        :class="[
          'flex',
          sidebarWidth === '25vw' ? 'justify-between' : 'justify-end gap-2',
        ]"
      >
        <div
          class="rounded-full flex items-center px-2 hover:text-white bg-[#202020] cursor-pointer hover:bg-[#383838]"
          @click="handleClickSearch"
          v-if="!isOpen"
        >
          <SearchIcon class="w-4 h-4 my-2 place-self-center" color="#b3b3b3" />
        </div>
        <transition
          :name="sidebarWidth !== '25vw' ? 'slideFromRight' : 'slideFromLeft'"
        >
          <input
            v-if="isOpen"
            ref="inputField"
            placeholder="Search in Your Library"
            class="bg-[#202020] text-[#b3b3b3] focus:outline-none focus:bg-[#383838] w-fit rounded-md px-2 text-xs transition-all duration-300 ease-in-out"
            @blur="isOpen = false"
            @focus="isOpen = true"
          />
        </transition>
        <div
          class="flex gap-2 text-sm font-regular items-center hover:text-white text-[#b3b3b3] cursor-pointer hover:scale-105"
        >
          Recents
          <ListBulletedIcon class="w-4 h-4 my-2 place-self-center" />
        </div>
      </div>

      <div
        class="flex justify-between px-2 text-[#b3b3b3] text-xs font-semibold mt-4"
        v-if="sidebarWidth !== '25vw'"
      >
        <span>Title</span>
        <span>Date added</span>
        <span>Played</span>
      </div>
      <hr class="bg-[#383838] mt-2" v-if="sidebarWidth !== '25vw'" />
      <div
        class="flex gap-3 items-center bg-[#202020] hover:bg-[#383838] rounded-md cursor-pointer px-2 pb-4 mt-2 justify-between"
      >
        <div class="flex gap-3">
          <div
            class="w-fit p-4 mt-4 bg-gradient-to-br from-[#470BF3] to-[#B6B8DA] rounded-md cursor-pointer"
          >
            <IconHeart fillColor="white" width="2px" />
          </div>
          <div class="flex flex-col gap-1 self-end">
            <h4 class="text-white">Liked Songs</h4>
            <span class="text-[#7b7b7b] text-sm">Playlists • 1 song</span>
          </div>
        </div>
        <span
          class="text-[#7b7b7b] text-xs content-center"
          v-if="sidebarWidth !== '25vw'"
          >1 hour ago</span
        >
      </div>
    </div>

    <div
      class="p-2 mt-4 bg-gradient-to-br from-[#470BF3] to-[#B6B8DA] flex items-center justify-center rounded-md cursor-pointer w-12 h-12"
      v-if="!expanded"
    >
      <IconHeart fillColor="white" class="custom-width" />
    </div>
  </div>
</template>

<style scoped>
.custom-width >>> svg {
  width: 18px !important;
  height: 18px !important;
}
.slideFromLeft-enter-active,
.slideFromLeft-leave-active {
  transform: translateX(-10%);
  opacity: 0;
}
.slideFromLeft-enter,
.slideFromLeft-leave-to {
  transform: translateX(-20%);
  opacity: 0.5;
}

.slideFromRight-enter-active,
.slideFromRight-leave-active {
  transform: translateX(10%);
  opacity: 0;
}
.slideFromRight-enter,
.slideFromRight-leave-to {
  transform: translateX(20%);
  opacity: 0.5;
}
</style>
