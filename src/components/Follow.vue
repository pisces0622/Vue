<template>
<div>
  <h1>123</h1>
</div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {guanzhuApi, userApi} from "@/api/serve";
import {Toast} from "vant";
import {ref} from "vue";
const router = useRouter()
const userids = ref('')

userApi({}).then(ele => {
  // console.log(ele.data);
  userids.value = ele.data.data.id
  guanzhuApi({userId: userids.value}).then(ele => {
    console.log(ele);
  })
})
</script>

<style scoped>

</style>
