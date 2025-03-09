<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { defineProps, ref } from "vue";

const props = defineProps<{
  tabs: Array<{ name: string; content: any }>;
}>();

const tabSelectedIndex = ref(0);

const handleTabChange = (index: number) => {
  tabSelectedIndex.value = index;
};
</script>

<template>
  <TabGroup :selectedIndex="tabSelectedIndex" @change="handleTabChange">
    <div class="flex flex-col w-full items-center hideScrollbar">
      <div class="w-full items-center">
        <TabList
          class="text-white flex space-x-2 p-4 rounded-t-md bg-[#202020] overflow-hidden overflow-x-scroll hideScrollbar"

        >
          <Tab
            v-for="(tab, index) in props.tabs"
            :tabSelectedIndex="tabSelectedIndex"
            :key="index"
            class="px-4 py-2 rounded-3xl text-sm"
            :class="{
              'bg-white': tabSelectedIndex === index,
              'bg-[#383838] text-white': tabSelectedIndex !== index,
            }"
          >
            {{ tab.name }}
          </Tab>
        </TabList>
      </div>

      <TabPanels
        class="text-white h-[83vh] bg-[#202020] px-4 rounded-b-md overflow-hidden overflow-y-scroll hideScrollbar"
      >
        <TabPanel v-for="(tab, index) in props.tabs" :key="index">
          <component :is="tab.content"></component>
        </TabPanel>
      </TabPanels>
    </div>
  </TabGroup>
</template>

<style>
[data-headlessui-state="selected"] {
  color: #202020;
  background-color: white;
}
[data-headlessui-state=""] {
  color: white;
}

*:focus {
  outline: none;
}
</style>
