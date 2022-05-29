<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.fullPath">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
</template>
