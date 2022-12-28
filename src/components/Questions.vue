<template>
  <div>
    <div class="HeadPortraitNav">
      <a @click="onClickLeft">取消</a>
      <p>快速提问</p>
      <a @click="check">下一步</a>
    </div>
    <div class="HeadPortraititle">
      <div class="sanjia">
        <svg class="sanjiaicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
             style="border-color: rgba(187,187,187,1);border-width: 0px;border-style: solid" filter="none">

          <g>
            <path
                d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"
                fill="rgba(141.01500000000001,142.03500000000003,211.905,1)"></path>
          </g>
        </svg>
        <p>全三甲医院医师</p>
      </div>
      <div class="sanjia huifu">
        <svg class="sanjiaicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
             style="border-color: rgba(187,187,187,1);border-width: 0px;border-style: solid" filter="none">

          <g>
            <path
                d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
                fill="rgba(211.905,136.935,180.03,1)"></path>
          </g>
        </svg>
        <p>三小时内专业回复</p>
      </div>
      <div class="sanjia baohu">
        <svg class="sanjiaicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
             style="border-color: rgba(187,187,187,1);border-width: 0px;border-style: solid" filter="none">

          <g>
            <path
                d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
                fill="rgba(142.03500000000003,198.9,211.905,1)"></path>
          </g>
        </svg>
        <p>隐私保护</p>
      </div>
    </div>
    <van-cell-group inset>
      <van-field
          v-model="message"
          rows="4"
          autosize
          label="问题"
          type="textarea"
          maxlength="200"
          placeholder="请描述你的年龄、性别、症状及就诊经历，便于医生进行准确分析，我们会保证你的隐私安全"
          show-word-limit
      />
    </van-cell-group>
    <div class="Uploadimg">
      <van-uploader v-model="fileList" multiple></van-uploader>
      <p v-if="!fileList.length" style="float: left;font-size: 12px;line-height: 80px;color: #8C8C8C;">
        你上传的附件仅对解答问题的医生可见可上传3张</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import { defineComponent } from 'vue'
import {Toast} from "vant";
import router from "@/router";

const message = ref('')
// 文件上传
const afterRead = (file:any) => {
  // 可以自行将文件上传至服务器
  console.log(file);
};
const onClickLeft = () => {
  history.back();
}
const fileList = ref([])
const check = ()=>{
  if(fileList.value.length>3){
      Toast({
        message: '照片数量超出!',
        icon: 'fail',
        overlay: true
      });
  }else{
    history.back();
  }
}


</script>
<style scoped>
.van-uploader {
  float: left;
}

.Uploadimg {
  width: 100%;
  /* height: 145px; */
  box-sizing: border-box;
  padding: 30px 10px;
}

.van-field {
  background-color: #f0f0f2;
}

.baohu {
  width: 78px !important;
}

.huifu {
  width: 125px !important;
}

.sanjia p {
  font-size: 12px;
  color: #8C8C8C;
  line-height: 45px;
  text-indent: 5px;
}

.sanjiaicon {
  float: left;
  margin-top: 10px;
}

.HeadPortraititle {
  overflow: hidden;
}

.sanjia {
  width: 120px;
  height: 100%;
}

.HeadPortraititle {
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
}

.HeadPortraitNav {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 10px;
  border-bottom: 1px solid #BBBBBB;
}

.HeadPortraitNav p, a {
  line-height: 45px;
}

.HeadPortraitNav a {
  color: #8C8C8C;
}
</style>
