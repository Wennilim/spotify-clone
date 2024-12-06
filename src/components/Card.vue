<script setup lang="ts">
import { defineProps, ref, onMounted, onUnmounted, computed } from "vue";
import { useHoverStates } from "../hooks/useHoverStates";
import PlayIcon from "../icons/PlayIcon.vue";
import { useRouter } from "vue-router";
const props = defineProps<{
  categoryName?: String;
  cards: Array<{
    id: number;
    src: string;
    name: string;
    description: string;
  }>;
}>();

const { hoverStates, handleMouseEnter, handleMouseLeave } = useHoverStates(
  props.cards.length
);

const router = useRouter();

const handleShowAllClick = () => {
  router.push(`/categories/${props.categoryName}`);
};

const windowWidth = ref(window.innerWidth);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

const numberOfCardsToShow = computed(() => {
  if (windowWidth.value >= 1280) return 7; // xl
  if (windowWidth.value >= 1024) return 6; // lg
  if (windowWidth.value >= 768) return 4; // md
  if (windowWidth.value >= 640) return 3; // sm
  return 2; // base
});

const displayedCards = computed(() => {
  return props.cards.slice(0, numberOfCardsToShow.value);
});
</script>

<template>
  <div class="bg-[#202020] flex-col gap-3">
    <div class="flex justify-between mb-2">
      <h1 class="text-2xl text-white font-bold hover:underline cursor-pointer">
        {{ props.categoryName }}
      </h1>
      <button
        class="text-[#b3b3b3] font-semibold text-sm hover:underline"
        @click="handleShowAllClick"
      >
        Show all
      </button>
    </div>

    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7"
    >
      <div
        v-for="(card, index) in displayedCards"
        :key="card.id"
        class="flex flex-col gap-1 m-2"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave(index)"
      >
        <div class="relative cursor-pointer">
          <img
            :src="card.src"
            :alt="card.name"
            class="rounded-md object-fill"
          />
          <div
            :class="{
              'opacity-100 translate-y-0': hoverStates[index],
              'opacity-0 translate-y-4': !hoverStates[index],
            }"
            class="absolute flex justify-center items-center right-3 bottom-3 transition-all duration-300"
          >
            <div
              class="w-12 h-12 bg-[#1DB954] rounded-full flex justify-center items-center shadow-3xl"
            >
              <PlayIcon class="w-6 h-6" />
            </div>
          </div>
        </div>

        <p class="font-[400] text-white">{{ card.name }}</p>
        <span class="text-[#b3b3b3] font-thin text-sm w-[150px] truncate">{{
          card.description
        }}</span>
      </div>
    </div>
  </div>
</template>
