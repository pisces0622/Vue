<template>
  <div>
    <div class="usernav">
      <van-nav-bar
          title="登录"
          left-text="首页"
          left-arrow
          :border="false"
          @click-left="onClickLeft"
      />
    </div>
    <div class="navimg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100"
           style="border-color: rgba(187,187,187,1);border-width: 0px;border-style: solid" filter="none">

        <g>
          <path
              d="M10.286 24q0 0.464-0.339 0.804t-0.804 0.339-0.804-0.339-0.339-0.804 0.339-0.804 0.804-0.339 0.804 0.339 0.339 0.804zM28.571 25.089q0 2.161-1.304 3.393t-3.464 1.232h-15.607q-2.161 0-3.464-1.232t-1.304-3.393q0-1.214 0.098-2.339t0.429-2.464 0.848-2.366 1.446-1.839 2.143-1.080q-0.393 0.929-0.393 2.143v3.625q-1.036 0.357-1.661 1.25t-0.625 1.982q0 1.429 1 2.429t2.429 1 2.429-1 1-2.429q0-1.089-0.634-1.982t-1.652-1.25v-3.625q0-1.107 0.446-1.661 2.357 1.857 5.268 1.857t5.268-1.857q0.446 0.554 0.446 1.661v1.143q-1.893 0-3.232 1.339t-1.339 3.232v1.589q-0.571 0.518-0.571 1.268 0 0.714 0.5 1.214t1.214 0.5 1.214-0.5 0.5-1.214q0-0.75-0.571-1.268v-1.589q0-0.929 0.679-1.607t1.607-0.679 1.607 0.679 0.679 1.607v1.589q-0.571 0.518-0.571 1.268 0 0.714 0.5 1.214t1.214 0.5 1.214-0.5 0.5-1.214q0-0.75-0.571-1.268v-1.589q0-1.214-0.616-2.277t-1.67-1.67q0-0.179 0.009-0.759t0-0.857-0.045-0.741-0.125-0.839-0.232-0.714q1.214 0.268 2.143 1.080t1.446 1.839 0.848 2.366 0.429 2.464 0.098 2.339zM22.857 9.143q0 2.839-2.009 4.848t-4.848 2.009-4.848-2.009-2.009-4.848 2.009-4.848 4.848-2.009 4.848 2.009 2.009 4.848z"
              fill="rgba(40.035000000000004,184.10999999999999,160.905,1)"></path>
        </g>
      </svg>
    </div>
    <!-- 登录 -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            autocomplete="true"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button color="#28B8A1" round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <router-link to="/Reg" style="float: right;margin-right: 25px;color: #28B8A1;">没有账号去注册</router-link>
  </div>
</template>
<style scoped>
.van-form {
  margin-top: 30px;
}

.navimg {
  width: 100%;
  height: 100px;
  /* background-color: tomato; */
  margin-top: 100px;
  text-align: center;
}
</style>
<script setup lang="ts">
import {useRouter} from 'vue-router'
import {ref} from "vue";
import {LoginApi} from '../api/serve'
import {Toast} from "vant";
import 'vant/es/toast/style';

const router = useRouter()
const onClickLeft = () => router.push({name: 'Home'});
// 登录
const username = ref('')
const password = ref('')
// 提交注册
const onSubmit = (from: any) => {
  console.log(from);
  LoginApi({userName: username.value, password: password.value}).then(item => {
    console.log(item.data);
    // 登录成功
    sessionStorage.setItem('token', item.data.data)
    if (item.data.success == true) {
      Toast.success(item.data.errorMessage);
      setTimeout(() => {
        router.push({
          path: '/User'
        })
      }, 2000);
    }
    if (item.data.success == false) {
      Toast.fail(item.data.errorMessage);
    }
  })
}
</script>
