<template>
  <div>
    <div class="navyslist">
      <van-nav-bar
          title="为你推荐的医生"
          left-text="返回"
          fixed
          left-arrow
          @click-left="onClickLeft"
      />
    </div>
    <div class="titlenav">
      <div class="Content">
        <span>为您推荐医生</span><span>{{ ysamt }}</span><span>位</span>
      </div>
      <router-link v-for="ysLists in ysList" :key="ysLists.id" :to="{name:'DoctorDetails',query:{id:ysLists.id}}">
        <div class="ysList">
          <div class="LeftList"><img :src="ysLists.avatar" alt=""></div>
          <div class="CenterList"><span>{{ ysLists.name }}</span>&nbsp;&nbsp;<span>{{ysLists.doctorTitleInfo.name}}</span><br/>
            <span>职称：</span>&nbsp;&nbsp;<span>{{ ysLists.doctorTitleInfo.desc }}</span><br/>
            <span style="float: left;">擅长：</span><span class="shanchang">{{ ysLists.desc }}</span>
            <br/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="10" height="10"
                 style="border-color: rgba(187,187,187,1);border-width: 0px;border-style: solid" filter="none">

              <g>
                <path
                    d="M30.857 11.554q0 0.393-0.464 0.857l-6.482 6.321 1.536 8.929q0.018 0.125 0.018 0.357 0 0.375-0.188 0.634t-0.545 0.259q-0.339 0-0.714-0.214l-8.018-4.214-8.018 4.214q-0.393 0.214-0.714 0.214-0.375 0-0.563-0.259t-0.188-0.634q0-0.107 0.036-0.357l1.536-8.929-6.5-6.321q-0.446-0.482-0.446-0.857 0-0.661 1-0.821l8.964-1.304 4.018-8.125q0.339-0.732 0.875-0.732t0.875 0.732l4.018 8.125 8.964 1.304q1 0.161 1 0.821z"
                    fill="rgba(255,151.98,0,1)"></path>
              </g>
            </svg>
            <span style="color:#FF9800;">&nbsp;4.9</span>
            <div style="margin-top:5px ;">
              <div
                  style="float: left;width: 63px;height: 20px;color: #28B8A1; border: 1px solid #28B8A1;text-align: center;line-height: 20px;border-radius: 20px;">
                从业12年
              </div>
              <div
                  style="float: left;margin-left: 10px; width: 63px;color: #28B8A1; height: 20px;border: 1px solid #28B8A1;text-align: center;line-height: 20px;border-radius: 20px;">
                快速回复
              </div>
            </div>
          </div>
          <div class="LeftRight"><p>¥19.9</p></div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {getArticle} from "@/api/serve";

const onClickLeft = () => {
  history.back();
};
const ysList = ref<any>([])
const ysamt = ref('')
// 医生列表
const str = `per=10&page=1`
getArticle(str).then(item => {
  console.log(item)
  ysList.value = item.data.data.list
  console.log(item.data.data.list);
  ysamt.value = item.data.data.list.length
})


</script>
<style scoped>
.navyslist {
  position: fixed;
  top: 0;
  width: 100%;
}

.shanchang {
  /*text-overflow: -o-ellipsis-lastline;*/
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  float: left;
  width: 180px;

}

.LeftList img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}

.LeftRight {
  width: 50px;
  height: 100%;
  float: right;
  color: #37B5C3;
}

.CenterList {
  width: 220px;
  height: 100%;
  float: left;
  font-size: 12px;
  color: #5E5E5E;
  line-height: 20px;
  margin-left: 10px;
}

.LeftList {
  width: 40px;
  height: 100%;
  float: left;
  margin-left: 15px;
}

.ysList {
  width: 100%;
  height: 140px;
}

.Content {
  width: 100%;
  height: 46px;
  font-size: 12px;
  color: #8C8C8C;
  line-height: 46px;
  text-indent: 20px;
  margin-top: 45px;
}

</style>
