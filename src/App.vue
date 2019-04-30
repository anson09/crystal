<template>
  <div id="app">
    <TheHeader />
    <Transition name="fade" mode="out-in">
      <RouterView />
    </Transition>
  </div>
</template>

<script>
const TheHeader = () => import("/components/common/TheHeader.vue");

export default {
  name: "App",
  components: { TheHeader }
};
</script>
