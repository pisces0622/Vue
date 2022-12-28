<template>
  <div>
    <navTop></navTop>
    <div class="KingKong">
      <router-link to="/DoctorList">
        <div class="kingbox">
          <p class="iconjg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="50" height="50"
                 style="border-color: rgba(187,187,187,1);border-width: 0px;border-style: solid" filter="none">
              <g>
                <path
                    d="M10.286 24q0 0.464-0.339 0.804t-0.804 0.339-0.804-0.339-0.339-0.804 0.339-0.804 0.804-0.339 0.804 0.339 0.339 0.804zM28.571 25.089q0 2.161-1.304 3.393t-3.464 1.232h-15.607q-2.161 0-3.464-1.232t-1.304-3.393q0-1.214 0.098-2.339t0.429-2.464 0.848-2.366 1.446-1.839 2.143-1.080q-0.393 0.929-0.393 2.143v3.625q-1.036 0.357-1.661 1.25t-0.625 1.982q0 1.429 1 2.429t2.429 1 2.429-1 1-2.429q0-1.089-0.634-1.982t-1.652-1.25v-3.625q0-1.107 0.446-1.661 2.357 1.857 5.268 1.857t5.268-1.857q0.446 0.554 0.446 1.661v1.143q-1.893 0-3.232 1.339t-1.339 3.232v1.589q-0.571 0.518-0.571 1.268 0 0.714 0.5 1.214t1.214 0.5 1.214-0.5 0.5-1.214q0-0.75-0.571-1.268v-1.589q0-0.929 0.679-1.607t1.607-0.679 1.607 0.679 0.679 1.607v1.589q-0.571 0.518-0.571 1.268 0 0.714 0.5 1.214t1.214 0.5 1.214-0.5 0.5-1.214q0-0.75-0.571-1.268v-1.589q0-1.214-0.616-2.277t-1.67-1.67q0-0.179 0.009-0.759t0-0.857-0.045-0.741-0.125-0.839-0.232-0.714q1.214 0.268 2.143 1.080t1.446 1.839 0.848 2.366 0.429 2.464 0.098 2.339zM22.857 9.143q0 2.839-2.009 4.848t-4.848 2.009-4.848-2.009-2.009-4.848 2.009-4.848 4.848-2.009 4.848 2.009 2.009 4.848z"
                    fill="rgba(40.035000000000004,184.10999999999999,160.905,1)"></path>
              </g>
            </svg>
          </p>
          <p>找医生</p></div>
      </router-link>
      <router-link to="/Drugs">
        <div class="kingbox">
          <p class="iconjg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="43" height="43"
                 style="border-color: rgba(187,187,187,1);border-width: 0px;border-style: solid" filter="none">

              <g>
                <path
                    d="M22.857 20v-3.429q0-0.25-0.161-0.411t-0.411-0.161h-4v-4q0-0.25-0.161-0.411t-0.411-0.161h-3.429q-0.25 0-0.411 0.161t-0.161 0.411v4h-4q-0.25 0-0.411 0.161t-0.161 0.411v3.429q0 0.25 0.161 0.411t0.411 0.161h4v4q0 0.25 0.161 0.411t0.411 0.161h3.429q0.25 0 0.411-0.161t0.161-0.411v-4h4q0.25 0 0.411-0.161t0.161-0.411zM11.429 6.857h9.143v-2.286h-9.143v2.286zM4.571 6.857v22.857h-0.571q-1.643 0-2.821-1.179t-1.179-2.821v-14.857q0-1.643 1.179-2.821t2.821-1.179h0.571zM25.714 6.857v22.857h-19.429v-22.857h2.857v-2.857q0-0.714 0.5-1.214t1.214-0.5h10.286q0.714 0 1.214 0.5t0.5 1.214v2.857h2.857zM32 10.857v14.857q0 1.643-1.179 2.821t-2.821 1.179h-0.571v-22.857h0.571q1.643 0 2.821 1.179t1.179 2.821z"
                    fill="rgba(40.035000000000004,184.10999999999999,160.905,1)"></path>
              </g>
            </svg>
          </p>
          <p>找药品</p></div>
      </router-link>
      <div class="kingbox">
        <p class="iconjg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="43" height="43"
               style="border-color: rgba(187,187,187,1);border-width: 0px;border-style: solid" filter="none">

            <g>
              <path
                  d="M25.143 24v-16q0-0.464-0.339-0.804t-0.804-0.339h-2.286q-0.464 0-0.804 0.339t-0.339 0.804v5.714h-9.143v-5.714q0-0.464-0.339-0.804t-0.804-0.339h-2.286q-0.464 0-0.804 0.339t-0.339 0.804v16q0 0.464 0.339 0.804t0.804 0.339h2.286q0.464 0 0.804-0.339t0.339-0.804v-5.714h9.143v5.714q0 0.464 0.339 0.804t0.804 0.339h2.286q0.464 0 0.804-0.339t0.339-0.804zM29.714 7.429v17.143q0 2.125-1.509 3.634t-3.634 1.509h-17.143q-2.125 0-3.634-1.509t-1.509-3.634v-17.143q0-2.125 1.509-3.634t3.634-1.509h17.143q2.125 0 3.634 1.509t1.509 3.634z"
                  fill="rgba(40.035000000000004,184.10999999999999,160.905,1)"></path>
            </g>
          </svg>
        </p>
        <p>查疾病</p></div>
      <div class="kingbox">
        <p class="iconjg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45"
               style="border-color: rgba(187,187,187,1);border-width: 0px;border-style: solid" filter="none">

            <g>
              <path
                  d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8a2 2 0 0 0-2-2zm0 14H3V8h18v12zM9 10v8l7-4z"
                  fill="rgba(40.035000000000004,184.10999999999999,160.905,1)"></path>
            </g>
          </svg>
        </p>
        <p>医师讲堂</p></div>
    </div>
    <!-- 轮播图片 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img style="height:100%;width: 100%;"
                           src="https://p3.itc.cn/images01/20220222/8012bf37cb9341e2b64c70e26d408700.jpeg"
                           alt=""></van-swipe-item>
      <van-swipe-item><img style="height:100%;width: 100%;"
                           src="https://img.scimall.org.cn/collect/2020/09/10/wt_a12302200910082356_ce1d25.jpg"
                           alt=""></van-swipe-item>
      <van-swipe-item><img style="height:100%;width: 100%;"
                           src="https://img2.baidu.com/it/u=440709112,3627221399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=400"
                           alt=""></van-swipe-item>
      <van-swipe-item><img style="height:100%;width: 100%;"
                           src="https://img1.baidu.com/it/u=863496565,1795180038&fm=253&fmt=auto&app=138&f=JPEG?w=867&h=500"
                           alt=""></van-swipe-item>
    </van-swipe>
    <!-- 提问 -->
    <div class="AskQuestions">
      <p class="shenti">身体小问题，快速问医生</p>
      <p class="sanjia">三甲医院主治及以上医生，已解答 120万 个问题</p>
      <router-link to="/HeadPortrait">
        <button>快速提问</button>
      </router-link>
    </div>

    <!-- 医师讲堂 -->
    <div class="Forum">
      <div class="Forumnav">
        <p>医师讲堂</p>
        <div style="float: right;line-height: 42px;"><span>更多</span>
          <van-icon name="arrow"/>
        </div>
      </div>
      <!-- 热门 -->
      <div class="Hots">
        <div class="Hotsleft">
          <p>疫情期间如何应对新冠肺炎</p>
          <p style="font-size:12px;color: #8C8C8C;line-height: 20px;">传染病专家权威讲解·赵桂鸣·主治医师</p>
          <p style="line-height:50px;font-size:12px;color: #8C8C8C;">¥9.00 ¥39.00 &nbsp 888人参与</p>
        </div>
        <img style="float: right;width: 109px;height: 74px;margin-right: 10px;"
             src="https://resource.chunyu.mobi/@/media/images/news/144787_8690a5fbe896473e.png"
             alt="">
      </div>
      <van-divider/>
      <div class="Hots">
        <div class="Hotsleft">
          <p>久坐一族要了解颈椎病预防与治疗</p>
          <p style="font-size:12px;color: #8C8C8C;line-height: 20px;">协和专家权威讲解·梁锦前·副主任医师</p>
          <p style="line-height:50px;font-size:12px;color: #8C8C8C;">¥9.00 ¥39.00 &nbsp 888人参与</p>
        </div>
        <img style="float: right;width: 109px;height: 74px;margin-right: 10px;"
             src="https://resource.chunyu.mobi/@/media/images/news/144787_582a4a97c6ed0a1b.png"
             alt="">
      </div>

      <div>
        <van-tabs v-model:active="active" @click-tab="onClickTab" color="#28B8A1" title-inactive-color="#101010"
                  title-active-color="#28B8A1">
          <van-tab title="医师列表">
            <div v-for="yslist in store.state.getarticles"
                 style="box-sizing: border-box;padding: 10px;float: left;margin-bottom: 50px;">
              <div class="Leftwz">
                <p style="line-height:30px ;overflow: hidden;height: 63px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;">{{ yslist.desc }}</p>
                <p style="color: #8C8C8C;font-size: 12px;line-height: 25px;float: right;">
                  一个性状是否会被自然选择淘汰，不止...</p>
                <img style="width:21px;height: 21px;float: left;margin-top: 40px;" :src="yslist.avatar" alt="">
                <p style="color: #8C8C8C;font-size: 12px;float: left;line-height: 50px;margin-left: 5px;">
                  {{ yslist.name }}</p>
              </div>
              <img style="float:right;width: 109px;height: 74px;"
                   src="https://img0.baidu.com/it/u=2742303442,3792289963&fm=253&app=138&size=w931&n=0&f=PNG&fmt=auto?sec=1666630800&t=eb91a2c356bba16d72dd17cd6219ef67"
                   alt="">
              <van-tag style="float: right;" type="primary" color="#EBEBEB" text-color="#8C8C8C" size="medium">科普
              </van-tag>
            </div>
            <van-divider/>
          </van-tab>

          <van-tab title="健康饮食">
            <div>
              <router-view></router-view>
            </div>
          </van-tab>

          <van-tab title="两性健康">
            <div>
              <router-view></router-view>
            </div>
          </van-tab>
          <van-tab title="孕产育儿">
            <div>
              <router-view></router-view>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import {ref} from "vue";

const active = ref<any>(0);
const value = ref<any>('')
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import navTop from "../components/Nav"

const router = useRouter()
const store = useStore()
const onClickTab = ({title}: { title: String }) => {
  console.log(title)
  if (title == '健康饮食') {
    router.push({
      path: '/eatHealthily'
    })
  } else if (title == '两性健康') {
    router.push({
      path: '/genderHealth'
    })
  } else if (title == '孕产育儿') {
    router.push({
      path: '/parenting'
    })
  } else if (title == '医师列表') {
    router.push({
      path: '/'
    })
  }
}
//   获取文章列表
store.commit('indexList')
</script>
<style scoped>

.Leftwz {
  width: 245px;
  height: 100%;
  float: left;
}


.Hotsleft {
  width: 227px;
  height: 100%;
  float: left;
  margin-left: 10px;
}

.Hots {
  height: 110px;
}

.Forumnav p {
  line-height: 42px;
  text-indent: 15px;
  float: left;
}

.Forumnav {
  height: 42px;
}

.Forum {
  width: 100%;
  height: 283px;
  margin-top: 10px;
}

.KingKong {
  margin-top: 54px;
}

.van-swipe-item {
  width: 100%;
  height: 170px;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.AskQuestions button {
  width: 98%;
  height: 46px;
  text-align: center;
  margin-top: 15px;
  border: none;
  border-radius: 10px;
  background-color: #28B8A1;
  color: #fff;
  box-shadow: 0px 0px 5px #28B8A1;
}

.sanjia {
  font-size: 14px;
  text-align: center;
  color: #5E5E5E;
}

.shenti {
  text-align: center;
  font-size: 17px;
  box-sizing: border-box;
  line-height: 55px;
  color: #181818;
}

.KingKong {
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}

.kingbox {
  width: 65px;
  height: 100%;
}

.iconjg {
  width: 50px;
  height: 50px;
  margin-left: 8px;
  margin-top: 10px;
}

.kingbox p {
  text-align: center;
  font-size: 14px;
  color: #B2B2B2;
}

.AskQuestions {
  width: 100%;
  height: 158px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 10px;
}
</style>
