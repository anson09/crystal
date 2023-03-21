<template>
  <h1>{{ title }}</h1>
  <div class="counter">
    <p>{{ a }} + {{ b }} = {{ sum }}</p>
    <el-button size="small" @click="incrementA">a++</el-button>
    <el-button size="small" @click="incrementB">b++</el-button>
    <el-button size="small" @click="store.$reset">reset</el-button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { ElMessage } from "element-plus/es/components/message/index.mjs";
import { useCountStore } from "../store/count";
import { randomColor } from "../util";

const store = useCountStore();
const { a, b, sum } = storeToRefs(store);
const { incrementA, incrementB } = store;

const title = ref("crystal starter");
const color = ref("red");

setInterval(() => {
  color.value = randomColor();
}, 5000);

onMounted(() => {
  ElMessage({
    message: "this is a message.",
    type: "success",
  });
});
</script>

<style scoped>
h1 {
  text-align: center;
  color: v-bind(color);
  transition: color 5s;
}

.counter {
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    margin-right: 10px;
  }
}
</style>
