<template>
  <h1>{{ message }}</h1>
  <div class="counter">
    <p>{{ a }} + {{ b }} = {{ sum }}</p>
    <el-button size="small" @click="add">add</el-button>
    <el-button size="small" @click="reset">reset</el-button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { ElMessage } from "element-plus/es/components/message/index.mjs";
import { useCommonStore } from "../store/common";

const store = useCommonStore();
const { a, b, sum } = storeToRefs(store);
const message = ref("crystal starter");
const color = ref("red");

function add() {
  a.value += 1;
  b.value += 2;
}

function reset() {
  store.$reset();
}

onMounted(() => {
  ElMessage({
    message: "this is a message.",
    type: "success",
  });

  setTimeout(() => {
    color.value = "black";
  }, 5000);
});
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  color: v-bind(color);
  transition: color 5s;
}

.counter {
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin-right: 10px;
  }
}
</style>
