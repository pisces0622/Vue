<template>
  <div>
    <div class="navyslist">
      <van-nav-bar
          id="nav"
          title="找药品"
          left-text="返回"
          fixed
          left-arrow
          @click-left="onClickLeft"
      />
    </div>
    <div class="search">
      <van-search
          v-model="value"
          shape="round"
          placeholder="搜索药品"
      />
    </div>

    <div v-for="ypLists in ypList">
      <div class="ypList">
        <div class="LeftList"><img :src="'https://hdf-app-server.penkuoer.com'+ypLists.image" alt=""></div>
        <div class="CenterList"><span>{{ ypLists.name }}</span><br/>
        </div>
        <div class="LeftRight"><p>{{ypLists.price}}</p></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {yaopin} from "@/api/serve";
const ypList = ref<any>([])
const value = ref('')
const onClickLeft = () => {
  history.back();
}
const str = `per=10&page=1`
yaopin(str).then(item =>{
  console.log(item)
  ypList.value = item.data.data.list
  console.log(ypList)
})
</script>
<style scoped>
.search {
  margin-top: 45px;
}
.navyslist {
  position: fixed;
  top: 0;
  width: 100%;
}


.LeftList img {
  width: 100px;
  height: 100px;
}

.LeftRight {
  width: 50px;
  height: 100%;
  float: right;
  color: #37B5C3;
}

.CenterList {
  width: 180px;
  height: 100%;
  float: left;
  font-size: 16px;
  color: #5E5E5E;
  line-height: 20px;
  margin-left: 10px;
}

.LeftList {
  width: 100px;
  height: 100%;
  float: left;
  margin-left: 15px;
}

.ypList {
  width: 100%;
  height: 140px;
}
</style>
