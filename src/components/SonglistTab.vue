<script setup lang="ts">
import { useHoverStates } from "../hooks/useHoverStates";
import PlayIcon from "../icons/PlayIcon.vue";
const props = defineProps<{
  songList: Array<{ id: number; src: string; title: string }>;
}>();
const { hoverStates, handleMouseEnter, handleMouseLeave } = useHoverStates(
  props.songList.length
);
</script>

<template>
  <div
    v-for="(song, index) in songList"
    :key="song.title"
    class="flex w-full bg-[#343634] justify-between relative cursor-pointer"
    @mouseenter="handleMouseEnter(index)"
    @mouseleave="handleMouseLeave(index)"
  >
    <div class="flex rounded-md p-2 mx-2 relative w-full">
      <img class="w-16 h-16" :src="song.src" :alt="song.title" />

      <span class="text-white font-bold text-sm self-center ml-4">
        {{ song.title }}
      </span>

      <div
        :class="{
          'opacity-100 translate-y-0': hoverStates[index],
          'opacity-0 translate-y-4': !hoverStates[index],
        }"
        class="absolute flex justify-center items-center right-0 top-4 transition-all duration-300"
      >
        <div
          class="w-12 h-12 bg-[#1DB954] rounded-full flex justify-center items-center shadow-3xl"
        >
          <PlayIcon class="w-6 h-6" />
        </div>
      </div>
    </div>
  </div>
</template>
