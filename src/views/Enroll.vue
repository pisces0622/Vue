<template>
  <div>
    <div class="usernav">
      <van-nav-bar
          title="注册"
          left-text="首页"
          left-arrow
          :border="false"
          @click-left="onClickLeft"
      />
    </div>
    <!-- 头像上传 -->
    <div class="txsc">
      <van-uploader v-if="!imgurl" class="txscauto" :after-read="afterRead"/>
      <div style="width:100%;height: 80px;"><img class="picc" :src="imgurl" alt=""/></div>
    </div>
    <!-- 注册 -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
            v-model="nickName"
            name="nickName"
            label="昵称"
            placeholder="请输入昵称"
            :rules="[{ required: true, message: '昵称不能为空' }]"
        />
        <van-field
            v-model="username"
            name="userName"
            label="用户名"
            placeholder="请输入用户名"
            :rules="[{ required: true, message: '用户名不能为空' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            autocomplete="true"
            :rules="[{ required: true, message: '密码不能为空' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button color="#28B8A1" round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <router-link to="/Login" style="float: right;margin-right: 25px;color: #28B8A1;">已有账号去登录</router-link>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import {txscApi} from "../api/serve";
import {regApi} from "../api/serve";
// 跳转
import {useRouter} from 'vue-router'
import 'vant/es/toast/style';
import {Toast} from 'vant';

const onClickLeft = () => history.back();;
const imgurl = ref<any>("")
const router = useRouter()
const afterRead = (file: any) => {
  // 创建一个空对象实例
  let formData = new FormData();
  // 调用append()方法添加数据
  formData.append("file", file.file);
  txscApi(formData).then(ele => {
    console.log(ele.data.data);
    imgurl.value = 'https://hdf-app-server.penkuoer.com/' + ele.data.data
  })
};
// 用户注册
const nickName = ref('')
const username = ref('')
const password = ref('')
// 提交数据
const onSubmit = (from: any) => {
  console.log(from);
  regApi({
    nickName: nickName.value,
    userName: username.value,
    password: password.value,
    avatar: imgurl.value
  }).then(item => {
    console.log(item.data.data);
    if (item.data.success == true) {
      Toast.success('注册成功');
      setTimeout(() => {
        router.push({
          path: '/User'
        })
      }, 2000);
    } else {
      Toast.fail('注册失败');
    }
  }).catch(error => {
    console.log(error.response.data.success);
    if (error.response.data.success == false) {
      Toast.fail('用户名重复');
    }

  })

}
</script>
<style scoped>
.picc {
  width: 80px;
  height: 80px;
  margin-left: 150px;
  margin-top: 50px;
}

.txscauto {
  margin-left: 150px;
  margin-top: 50px;
}

.txsc {
  margin: 0 auto;
  width: 100%;
  height: 170px;
}

.usernav {
  height: 44px;
  background-color: violet;
}
</style>
