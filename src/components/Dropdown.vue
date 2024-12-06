<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <Menu as="div" class="relative inline-block text-left z-50">
    <MenuButton as="template" class="text-white flex gap-2">
      <slot></slot>
    </MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute px-4 py-2 right-0 mt-2 w-56 origin-top-right rounded-md bg-[#282828] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <MenuItem
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          as="a"
          class="text-white flex gap-3 p-2 font-regular text-sm hover:bg-[#383838] bg-[#282828] hover:rounded-md cursor-pointer"
        >
          <span class="self-center" :class="link.icon ?? ''"></span>
          {{ link.label }}
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
