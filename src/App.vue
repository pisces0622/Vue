<template>
  <div>
      <router-view></router-view>
    <Tabbar v-if="$route.meta.tabbarshow"></Tabbar>
  </div>
</template>
<script setup lang="ts">
import Tabbar from "./components/Tabbar.vue";
</script>
