<template>
  <div>
    <div class="navyslist">
      <van-nav-bar
          id="nav"
          :title="DoctorName"
          left-text="返回"
          fixed
          left-arrow
          @click-left="onClickLeft"
      />
    </div>
    <div class="tuijianNav">
      <img :src="Doctoravatar" alt="">
      <div class="centreText">
        <p style="margin-top: 10px;">{{ DoctorName }}</p>
        <span>{{ Doctorzhiwei }}</span>
<!--        <p>{{ DoctorHospital }}</p>-->
      </div>
      <div class="Follow">
        <div @click="guanzhuys"
             style="width: 60px;height: 22px;border: 1px solid #28B8A1;border-radius: 20px;text-align: center;line-height: 22px;margin-top: 30px;color: #28B8A1;"
             v-text="Follow"></div>
      </div>
    </div>
    <div class="Employed" style="position: relative;">
      <div class="EmployedText" style="border-right:1px solid #ECECEC ;">
        <div style="margin-top: 10px;">
          <span>11</span>
          <span>年</span>
          <p>从业年限</p>
        </div>
      </div>
      <div class="EmployedText" style="border-right:1px solid #ECECEC ;">
        <div style="margin-top: 10px;">
          <span>2000</span>
          <span>次</span>
          <p>回答次数</p>
        </div>
      </div>
      <div class="EmployedText" style="color: #FF9800;">
        <div style="margin-top: 10px;">
          <span style="font-size: 20px;">4.9</span>
          <span>分</span>
          <p>回答次数</p>
        </div>
      </div>
      <div style="float: left;position: absolute;bottom: 9px;left: 9px;">
        <span>医师认证</span>
        <span>平均响应时长</span>
        <span>5分钟</span>
      </div>
    </div>
    <!-- 个人简介 -->
    <div class="userJie">
      <h3>个人简介</h3>
      <p>{{ userjie }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
// 引入获取id的方法
import {useRouter} from "vue-router";
import 'vant/es/toast/style';
import {ref} from "vue";
import {Toast} from "vant";
import {DoctorApi, guanzhuApi, userApi} from "../api/serve";

const router = useRouter()
// 获取url里的id参数
let ysid = router.currentRoute.value.query.id
console.log(ysid);
const onClickLeft = () => {
  history.back();
}
Toast.loading({
  message: '加载中...',
  forbidClick: true,
  loadingType: 'spinner',
  overlay: true
});

const Follow = ref('关注')
// 医生姓名
const DoctorName = ref('')
// 医生头像
const Doctoravatar = ref('')
// 科室
const Doctorzhiwei = ref('')
const userids = ref('')
const userjie = ref('')
const DoctorHospital = ref('')
// 获取医生信息
DoctorApi(ysid).then(item => {
  console.log(item);
  userjie.value = item.data.data.desc;
  if (item.status == 200) {
    Toast({
      message: '加载完成！',
      icon: 'success',
      overlay: true
    });
  }
  // DoctorHospital.value = item.data.data.hospitalInfo.name
  DoctorName.value = item.data.data.name
  Doctoravatar.value = item.data.data.avatar
  Doctorzhiwei.value = item.data.data.doctorTitleInfo.name
}).catch(function (error) {
  console.log(error.response.status);
  if (error.response.status == 404) {
    // 处理错误情况
    Toast({
      message: '加载失败!',
      icon: 'fail',
      overlay: true
    });
  }

})
// 关注医生
const guanzhuys = () => {
  userApi({}).then(ele => {
    // console.log(ele.data);
    userids.value = ele.data.data.id
    guanzhuApi({userId: userids.value, doctorId: ysid}).then(ele => {
      console.log(ele.data.success);
      if (ele.data.success == true) {
        Toast('已关注');
        Follow.value = '已关注'
      }
    })
  })
}
</script>
<style scoped>
.userJie p {
  text-indent: 10px;
}

.userJie {
  width: 100%;
  /* height: 185px; */
  margin-top: 5px;
  border-bottom: 1px solid #ECECEC;
  box-sizing: border-box;
  padding: 0 10px;
  overflow: hidden;
}

.EmployedText {
  width: 30%;
  height: 70px;
  text-align: center;
}

.Employed {
  width: 100%;
  height: 113px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 10px;
}

.Follow {
  width: 80px;
  height: 100%;
  float: left;
}

.centreText {
  width: 200px;
  height: 100%;
  float: left;
  margin-left: 10px;
  color: #AEAEAE;
}

.tuijianNav {
  width: 100%;
  height: 105px;
  /* margin-top: 45px; */
  box-sizing: border-box;
  padding: 10px 10px;
}

.tuijianNav img {
  width: 62px;
  height: 62px;
  border-radius: 100%;
  margin-top: 13px;
  float: left;
}

</style>
