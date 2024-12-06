<script setup lang="ts">
import Card from "../components/Card.vue";
import MyFooter from "../components/MyFooter.vue";
import SonglistTab from "../components/SonglistTab.vue";
import { categoryList } from "../data/category.ts";
import { songList } from "../data/songlist.ts";
import { videoList } from "../data/videolist.ts";
import { useHoverStates } from "../hooks/useHoverStates.ts";
import AddListIcon from "../icons/AddListIcon.vue";
import PlayIcon from "../icons/PlayIcon.vue";
import ThreeDotsIcon from "../icons/ThreeDotsIcon.vue";

const { hoverStates, handleMouseEnter, handleMouseLeave } = useHoverStates(
  videoList.length
);

const handleVideoPlay = (index: number) => {
  const video = document.getElementById(`video-${index}`) as HTMLVideoElement;
  if (video) {
    video.play();
  }
};

const handleVideoPause = (index: number) => {
  const video = document.getElementById(`video-${index}`) as HTMLVideoElement;
  if (video) {
    video.pause();
  }
};
</script>

<template>
  <div class="flex flex-col gap-12 bg-[#202020]">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      <SonglistTab :songList="songList" />
    </div>
    <div v-for="category in categoryList" :key="category.id">
      <Card :categoryName="category.categoryName" :cards="category.list" />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8"
    >
      <div
        v-for="(videolist, index) in videoList"
        :key="videolist.id"
        class="relative cursor-pointer"
        @mouseenter="
          () => {
            handleMouseEnter(index);
            handleVideoPlay(index);
          }
        "
        @mouseleave="
          () => {
            handleMouseLeave(index);
            handleVideoPause(index);
          }
        "
      >
        <video
          :id="`video-${index}`"
          playsinline
          loop
          :src="videolist.src"
          class="w-[400px] h-[500px] rounded-md object-cover shadow-2xl"
        ></video>
        <div
          class="absolute top-0 left-0 w-full h-full flex p-4 bg-black bg-opacity-50 gap-3"
        >
          <img
            class="w-[100px] h-[100px] object-cover shadow-2xl rounded-md"
            :src="videolist.img"
            alt="video thumbnail"
          />
          <div class="flex flex-col gap-2">
            <span class="text-white font-bold text-xl mt-2 hover:underline">
              {{ videolist.title }}
            </span>
            <span class="text-[#b3b3b3] text-sm font-thin"
              >Playlist by Spotify</span
            >
          </div>
        </div>
        <span
          :class="{
            'absolute flex items-end left-4 bottom-4 text-[#b3b3b3] font-thin text-sm transition-all duration-300 w-[250px]': true,
            'transform -translate-y-4': hoverStates[index],
          }"
          >{{ videolist.description }}</span
        >
        <div
          class="absolute flex justify-end items-end right-4 bottom-4 gap-3 transition-all duration-300"
          :class="{
            'opacity-100 translate-y-0': hoverStates[index],
            'opacity-0 translate-y-4': !hoverStates[index],
          }"
        >
          <ThreeDotsIcon
            color="#b3b3b3"
            class="w-8 h-8 self-center cursor-pointer transition-transform transform hover:text-white"
          />
          <AddListIcon
            color="#b3b3b3"
            class="w-8 h-8 self-center cursor-pointer transition-transform transform hover:text-white hover:scale-105"
          />
          <div
            class="w-12 h-12 bg-white rounded-full flex justify-center items-center transition-transform transform shadow-3xl hover:scale-105"
          >
            <PlayIcon class="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
</style>
