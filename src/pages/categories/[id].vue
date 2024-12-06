<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import MyFooter from "../../components/MyFooter.vue";
import { categoryList } from "../../data/category.ts";
import { useHoverStates } from "../../hooks/useHoverStates";
import PlayIcon from "../../icons/PlayIcon.vue";
const params = useRoute().params.id;
const { hoverStates, handleMouseEnter, handleMouseLeave } = useHoverStates(
  categoryList.length
);

const displayedCards = computed(() => {
  return categoryList[categoryList.findIndex((c) => c.categoryName == params)]
    .list;
});
</script>

<template>
  <div class="flex flex-col bg-[#202020] p-8 rounded-md">
    <h1 class="text-3xl font-bold text-white my-4 bg-[#202020]">
      {{ params }}
    </h1>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 w-full mt-8 mb-12"
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
