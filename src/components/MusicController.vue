<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import LoopIcon from "../icons/LoopIcon.vue";
import NextIcon from "../icons/NextIcon.vue";
import PauseIcon from "../icons/PauseIcon.vue";
import PlayIcon from "../icons/PlayIcon.vue";
import PreviousIcon from "../icons/PreviousIcon.vue";
import ShuffleIcon from "../icons/ShuffleIcon.vue";
import VerifiedIcon from "../icons/VerifiedIcon.vue";
import VolumeIcon from "../icons/VolumeIcon.vue";
import MicIcon from "../icons/MicIcon.vue";
import DeviceIcon from "../icons/DeviceIcon.vue";
import QueueIcon from "../icons/QueueIcon.vue";
import NowPlayingIcon from "../icons/NowPlayViewIcon.vue";
import MiniPlayerIcon from "../icons/MiniPlayerIcon.vue";
import FullScreenIcon from "../icons/FullScreenIcon.vue";

const audio = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const volume = ref(1);

const playPause = () => {
  isPlaying.value = !isPlaying.value;
};

const handleTimeUpdate = () => {
  currentTime.value = audio.value?.currentTime || 0;
};

const handleLoadedMetadata = () => {
  duration.value = audio.value?.duration || 0;
};

const handleSliderChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (audio.value) {
    audio.value.currentTime = Number(target.value);
  }
};

const handleVolumeChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  volume.value = Number(target.value);
  if (audio.value) {
    audio.value.volume = volume.value;
  }
};

const formatTime = (value: number) => {
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

onMounted(() => {
  if (audio.value) {
    audio.value.addEventListener("timeupdate", handleTimeUpdate);
    audio.value.addEventListener("loadedmetadata", handleLoadedMetadata);
  }
});

onUnmounted(() => {
  if (audio.value) {
    audio.value.removeEventListener("timeupdate", handleTimeUpdate);
    audio.value.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }
});
</script>

<template>
  <div class="fixed bottom-0 w-full bg-black h-fit">
    <div class="flex p-3 justify-between items-center">
      <!-- Song Info -->
      <div class="flex gap-4 items-center min-w-[180px]">
        <img
          src="https://i.scdn.co/image/ab67616d0000485154bdca52fa6d58a84bf7c28d"
          class="w-[56px] h-[56px] rounded-md"
        />
        <div class="flex flex-col gap-1">
          <span class="text-white font-semibold text-sm">Slow Low</span>
          <span class="text-[#b3b3b3] font-thin text-xs">Jason Derulo</span>
        </div>
        <VerifiedIcon class="w-4 h-4 cursor-pointer" color="#1DB954" />
      </div>

      <!-- Controls -->
      <div class="flex flex-col items-center w-[540px]">
        <div class="flex gap-4 items-center">
          <ShuffleIcon class="w-4 h-4 cursor-pointer hover:scale-105" color="#1DB954" />
          <PreviousIcon
            class="w-4 h-4 cursor-pointer hover:text-white"
            color="#b3b3b3"
          />
          <div
            class="w-8 h-8 bg-white rounded-full flex justify-center items-center transition-transform transform shadow-3xl hover:scale-105 cursor-pointer"
          >
            <component
              :is="isPlaying ? PauseIcon : PlayIcon"
              class="w-4 h-4"
              color="#00000"
            />
          </div>
          <NextIcon
            class="w-4 h-4 cursor-pointer hover:text-white"
            color="#b3b3b3"
          />
          <LoopIcon
            class="w-4 h-4 cursor-pointer hover:text-white"
            color="#b3b3b3"
          />
        </div>

        <!-- Progress Slider -->
        <div class="flex items-center gap-2 w-full mt-2">
          <span class="text-white text-xs">{{ formatTime(currentTime) }}</span>
          <input
            type="range"
            min="0"
            :max="duration"
            step="0.1"
            :value="currentTime"
            class="h-[5px] w-full cursor-pointer accent"
            @input="handleSliderChange"
          />
          <span class="text-white text-xs">{{ formatTime(duration) }}</span>
        </div>
      </div>

      <!-- Volume Control -->
      <div class="flex items-center gap-3 w-[405px]">
        <NowPlayingIcon class="w-6 h-6 cursor-pointer hover:text-white" color="#b3b3b3" />
        <MicIcon class="w-6 h-6 cursor-pointer hover:text-white" color="#b3b3b3" />
        <QueueIcon class="w-6 h-6 cursor-pointer hover:text-white" color="#b3b3b3" />
        <DeviceIcon class="w-6 h-6 cursor-pointer hover:text-white" color="#b3b3b3" />
        <VolumeIcon class="w-6 h-6 cursor-pointer hover:text-white" color="#b3b3b3" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          v-model="volume"
          @input="handleVolumeChange"
          class="w-20 h-[5px] accent"
        />
        <MiniPlayerIcon class="w-6 h-6 cursor-pointer hover:text-white" color="#b3b3b3" />
        <FullScreenIcon class="w-6 h-6 cursor-pointer hover:text-white" color="#b3b3b3" />
      </div>
    </div>

    <!-- Hidden Audio Element -->
    <audio ref="audio" src="/path/to/your/audio/file.mp3"></audio>
  </div>
</template>

<style scoped>
.accent {
  accent-color: #1db954;
}
.music-controller {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.slider-container {
  width: 100%;
}

input[type="range"] {
  width: 100%;
}

.volume-slider {
  width: 100px;
}
</style>
