<script setup lang="ts">
import { footerIconList } from "../data/footer";
import { footerList } from "../data/footer";
import { footerBottomList } from "../data/footer";
</script>

<template>
  <div class="flex flex-col p-4 mb-12">
    <div class="flex flex-col gap-2 mx-8 lg:flex-row">
      <div
        class="text-white w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        <div
          v-for="item in footerList"
          :key="item.id"
          class="flex flex-col gap-2 mb-8"
        >
          <h1 class="font-bold text-md">{{ item.title }}</h1>
          <span
            v-for="x in item.subtitle"
            class="font-regular text-[#b3b3b3] text-md hover:underline cursor-pointer"
            >{{ x.title }}</span
          >
        </div>
      </div>
      <div class="flex gap-3">
        <div
          class="rounded-full p-2 bg-[#2a2a2a] h-fit hover:bg-[#9d9d9d] cursor-pointer"
          v-for="icon in footerIconList"
          :key="icon.id"
        >
          <component :is="icon.src" color="white" class="w-5 h-5" />
        </div>
      </div>
    </div>
    <hr class="border-[#424242] mb-4" />
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="flex gap-6 m-4">
        <span
          v-for="item in footerBottomList"
          :key="item.id"
          class="text-[#b3b3b3] text-sm font-[300] hover:text-white cursor-pointer"
        >
          {{ item.title }}
        </span>
      </div>

      <span class="text-[#b3b3b3] text-sm">© 2024 Spotify AB</span>
    </div>
  </div>
</template>
