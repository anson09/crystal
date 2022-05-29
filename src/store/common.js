import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  state: () => ({
    a: 0,
    b: 0,
  }),
  getters: { sum: (state) => state.a + state.b },
});
