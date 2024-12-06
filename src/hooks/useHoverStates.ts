import { ref } from "vue";

export function useHoverStates(length: number) {
  const hoverStates = ref<boolean[]>(Array(length).fill(false));

  const handleMouseEnter = (index: number) => {
    hoverStates.value[index] = true;
  };

  const handleMouseLeave = (index: number) => {
    hoverStates.value[index] = false;
  };

  return {
    hoverStates,
    handleMouseEnter,
    handleMouseLeave,
  };
}
