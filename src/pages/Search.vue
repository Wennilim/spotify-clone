<script setup lang="ts">
import MyFooter from "../components/MyFooter.vue";
import { browseAllList } from "../data/category.ts";
</script>

<template>
  <div class="bg-[#202020] w-full rounded-md p-8">
    <h1 class="text-white text-2xl font-semibold mb-8">Browse all</h1>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16"
    >
      <div
        v-for="(item, index) in browseAllList"
        :key="item.id"
        class="w-full h-[180px] relative rounded-md flex overflow-hidden cursor-pointer hover:scale-75 transition-all duration-300 ease-in-out"
        :style="{ 'background-color': item.bgColor }"
      >
        <h1 class="text-white font-bold text-2xl p-4 z-10">{{ item.title }}</h1>
        <img
          :src="item.src"
          :alt="item.title"
          class="w-[143px] h-[143px] object-cover object-center rotate-30 absolute right-[-25px] bottom-[-4px] rounded-md shadow-2xl"
        />
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<style scoped>
.rotate-30 {
  transform: rotate(30deg);
}
</style>
