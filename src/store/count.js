import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCountStore = defineStore("count", () => {
  const a = ref(0);
  const b = ref(0);
  const sum = computed(() => a.value + b.value);

  function incrementA() {
    a.value += 1;
  }

  function incrementB() {
    b.value += 1;
  }

  return { a, b, sum, incrementA, incrementB };
});
