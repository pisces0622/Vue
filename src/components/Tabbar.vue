<template>
  <div class="Tabbar">
    <van-tabbar border active-color="#28B8A1" v-model="active">
      <van-tabbar-item name="Home" to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="Inquiries" to="/Inquiries" icon="newspaper-o">问诊</van-tabbar-item>
      <van-tabbar-item name="User" to="/User" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";

const active = ref('Home')

/* 直接在tabbar组件页面监听，判断当前页面是哪个页面,
解决刷新时,tab默认为 0 的bug */
const navBarActive = window.location.pathname
console.log(navBarActive)
if (navBarActive.includes('/Home')) {
  active.value = 'Home'
} else if (navBarActive.includes('/Inquiries')) {
  active.value = 'Inquiries'
} else if (navBarActive.includes('/User')) {
  active.value = 'User'
}
</script>
<style scoped>

</style>
