<template>
  <div class="box">
    <navTop></navTop>
    <router-link to="/HeadPortrait">
      <div class="AskQuestions">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="45" height="45"
             style="border-color: rgba(187,187,187,1);border-width: 0px;border-style: solid" filter="none">

          <g>
            <path
                d="M18.286 24.571v-3.429q0-0.25-0.161-0.411t-0.411-0.161h-3.429q-0.25 0-0.411 0.161t-0.161 0.411v3.429q0 0.25 0.161 0.411t0.411 0.161h3.429q0.25 0 0.411-0.161t0.161-0.411zM22.857 12.571q0-1.571-0.991-2.911t-2.473-2.071-3.036-0.732q-4.339 0-6.625 3.804-0.268 0.429 0.143 0.75l2.357 1.786q0.125 0.107 0.339 0.107 0.286 0 0.446-0.214 0.946-1.214 1.536-1.643 0.607-0.429 1.536-0.429 0.857 0 1.527 0.464t0.67 1.054q0 0.679-0.357 1.089t-1.214 0.804q-1.125 0.5-2.063 1.545t-0.938 2.241v0.643q0 0.25 0.161 0.411t0.411 0.161h3.429q0.25 0 0.411-0.161t0.161-0.411q0-0.339 0.384-0.884t0.973-0.884q0.571-0.321 0.875-0.509t0.821-0.625 0.795-0.857 0.5-1.080 0.223-1.446zM29.714 16q0 3.732-1.839 6.884t-4.991 4.991-6.884 1.839-6.884-1.839-4.991-4.991-1.839-6.884 1.839-6.884 4.991-4.991 6.884-1.839 6.884 1.839 4.991 4.991 1.839 6.884z"
                fill="rgba(54.059999999999995,182.07,195.07500000000002,1)"></path>
          </g>
        </svg>
        <p style="float: left; margin-top:10px;margin-left: 20px;color: black;">快速提问</p><br><br>
        <p style="float: left;margin-left: 20px;color: #5E5E5E;font-size: 13px;">描述症状 自动匹配医生解答</p>
      </div>
    </router-link>
    <van-divider/>
    <router-link to="/DoctorList">
      <div class="AskQuestions">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="45" height="45"
             style="border-color: rgba(187,187,187,1);border-width: 0px;border-style: solid" filter="none">

          <g>
            <path
                d="M10.286 24q0 0.464-0.339 0.804t-0.804 0.339-0.804-0.339-0.339-0.804 0.339-0.804 0.804-0.339 0.804 0.339 0.339 0.804zM28.571 25.089q0 2.161-1.304 3.393t-3.464 1.232h-15.607q-2.161 0-3.464-1.232t-1.304-3.393q0-1.214 0.098-2.339t0.429-2.464 0.848-2.366 1.446-1.839 2.143-1.080q-0.393 0.929-0.393 2.143v3.625q-1.036 0.357-1.661 1.25t-0.625 1.982q0 1.429 1 2.429t2.429 1 2.429-1 1-2.429q0-1.089-0.634-1.982t-1.652-1.25v-3.625q0-1.107 0.446-1.661 2.357 1.857 5.268 1.857t5.268-1.857q0.446 0.554 0.446 1.661v1.143q-1.893 0-3.232 1.339t-1.339 3.232v1.589q-0.571 0.518-0.571 1.268 0 0.714 0.5 1.214t1.214 0.5 1.214-0.5 0.5-1.214q0-0.75-0.571-1.268v-1.589q0-0.929 0.679-1.607t1.607-0.679 1.607 0.679 0.679 1.607v1.589q-0.571 0.518-0.571 1.268 0 0.714 0.5 1.214t1.214 0.5 1.214-0.5 0.5-1.214q0-0.75-0.571-1.268v-1.589q0-1.214-0.616-2.277t-1.67-1.67q0-0.179 0.009-0.759t0-0.857-0.045-0.741-0.125-0.839-0.232-0.714q1.214 0.268 2.143 1.080t1.446 1.839 0.848 2.366 0.429 2.464 0.098 2.339zM22.857 9.143q0 2.839-2.009 4.848t-4.848 2.009-4.848-2.009-2.009-4.848 2.009-4.848 4.848-2.009 4.848 2.009 2.009 4.848z"
                fill="rgba(54.059999999999995,182.07,195.07500000000002,1)"></path>
          </g>
        </svg>
        <p style="float: left; margin-top:10px;margin-left: 20px;color: black;">找医生</p><br><br>
        <p style="float: left;margin-left: 20px;color: #5E5E5E;font-size: 13px;">按科室快速找对医生 对症咨询</p>
      </div>
    </router-link>
    <!-- 热门科室 -->
    <div class="Department">
      <div class="DepartmentText">
        <p style="float: left;line-height: 58px;text-indent: 20px;">热门科室</p>
        <div class="DepartmentTextRight"><span>更多</span>
          <van-icon name="arrow"/>
        </div>
      </div>
      <!-- 金刚区 -->
      <div class="KingKong" style="overflow:hidden ;">
        <div v-for="ksList in keshi" :key="ksList.id" class="KingKongnav">
          <svg t="1666536951447" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="3404" width="45" height="45">
            <path
                d="M512 1013.76c-277.11488 0-501.76-224.64512-501.76-501.76S234.88512 10.24 512 10.24s501.76 224.64512 501.76 501.76-224.64512 501.76-501.76 501.76z m0-51.02592c248.9344 0 450.73408-201.79968 450.73408-450.73408 0-248.9344-201.79968-450.73408-450.73408-450.73408-248.9344 0-450.73408 201.79968-450.73408 450.73408 0 248.9344 201.79968 450.73408 450.73408 450.73408zM456.9856 637.9008l295.45984-339.94752a26.4192 26.4192 0 0 1 37.59616-2.31936 28.32896 28.32896 0 0 1 3.10784 38.8608l-307.01568 380.38016a30.72 30.72 0 0 1-42.90048 4.84864L235.44832 556.2368a32.128 32.128 0 0 1-5.74976-44.6464 32.1536 32.1536 0 0 1 44.544-6.58944l182.74304 132.90496z"
                p-id="3405" fill="#0AB190"></path>
          </svg>
          <p style="font-size: 12px;color: #8C8C8C;text-align: center;line-height: 30px;">{{ ksList.name }}</p>
        </div>
      </div>
    </div>
    <!-- 最新问答 -->
    <div class=" Navigation">
      <div class="DepartmentText">
        <p style="float: left;line-height: 58px;text-indent: 20px;">最新问答</p>
        <div class="DepartmentTextRight"><span style="color:#28B8A1 ;">换一批</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
               style="border-color: rgba(187,187,187,1);border-width: 0px;border-style: solid" filter="none">

            <g>
              <path
                  d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
                  fill="rgba(40.035000000000004,184.10999999999999,160.905,1)"></path>
            </g>
          </svg>
        </div>
      </div>
      <!-- 文章 -->
      <div>
        <div class="Article">
          <p style=" overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: pre-wrap;line-height: 30px;">
            我总是在晚上心律失常，心脏跳一下停一下，跳两下停一下，把我跳醒后持别难受，折腾一夜，到早上又好点了，请问大夫这需要怎么治疗？</p>
          <p style=" overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: pre-wrap;
  line-height: 30px;color: #8C8C8C;font-size: 14px;">
            您好！很荣幸帮助你！根据您的描述，您需要首先做一个动态心电图检查，了解心律失常性质，看看是早搏？还是传导阻滞？结合您的年龄、合并病等，来判断下一步是否需要进一步检查和相应的治疗措施。</p>
          <div class="ArticleBottom">
            <img style="width:21px;height:21px;float: left;margin-top: 15px;margin-left: 15px;border-radius: 100%;"
                 src="https://img2.baidu.com/it/u=1807443568,704507401&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666630800&t=58fea629b9bc250c74ebffcad9b2ec50"
                 alt="">
            <p style="line-height: 55px;text-indent: 10px;float: left;">徐浩&nbsp; 主治医师 &nbsp;心内科</p>
            <van-tag color="rgb(219 216 216)" style="margin-top: 17px;float: right;margin-right:20px;color: #8C8C8C;"
                     type="primary" size="medium">优质问答
            </van-tag>
          </div>
        </div>
        <van-divider/>
      </div>
      <div>
        <div class="Article">
          <p style=" overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: pre-wrap;line-height: 30px;">
            患者问：医生您好！我是糖尿病患者，今年47岁，最近尿糖很高，三个加号，怎样才能把糖降下来？身体特别乏力。</p>
          <p style=" overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: pre-wrap;line-height: 30px;color: #8C8C8C;font-size: 14px;">
            您好！很荣幸帮助你！根据您的描述，降糖药有很多，药物效果不好还有胰岛素，需要根据你的具体情况，结合以前的降糖治疗措施来调整治疗方案。不管采用什么治疗措施，都应该配合控制饮食、减肥、适当运动、戒烟限酒等生活方式调理。</p>
          <div class="ArticleBottom">
            <img style="width:21px;height:21px;float: left;margin-top: 15px;margin-left: 15px;border-radius: 100%;"
                 src="https://img2.baidu.com/it/u=1807443568,704507401&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666630800&t=58fea629b9bc250c74ebffcad9b2ec50"
                 alt="">
            <p style="line-height: 55px;text-indent: 10px;float: left;">张琦&nbsp; 主治医师 &nbsp;内分泌科</p>
            <van-tag color="rgb(219 216 216)" style="margin-top: 17px;float: right;margin-right:20px;color: #8C8C8C;"
                     type="primary" size="medium">优质问答
            </van-tag>
          </div>
        </div>
        <van-divider/>
      </div>
      <div>
        <div class="Article">
          <p style=" overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: pre-wrap;line-height: 30px;">
            患者问：医生您好！我在初中时因为过马路时被小轿车撞到脚部导致骨折，近两年腿部经常感...</p>
          <p style=" overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: pre-wrap;line-height: 30px;color: #8C8C8C;font-size: 14px;">
            您好！很荣幸帮助你！根据您的描述，您可能是因为初中时的车祸导致了骨质问题，你最好先去医院进行拍...</p>
          <div class="ArticleBottom">
            <img style="width:21px;height:21px;float: left;margin-top: 15px;margin-left: 15px;border-radius: 100%;"
                 src="https://img2.baidu.com/it/u=1807443568,704507401&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666630800&t=58fea629b9bc250c74ebffcad9b2ec50"
                 alt="">
            <p style="line-height: 55px;text-indent: 10px;float: left;">黄玮&nbsp; 主治医师 &nbsp;骨科</p>
            <van-tag color="rgb(219 216 216)" style="margin-top: 17px;float: right;margin-right:20px;color: #8C8C8C;"
                     type="primary" size="medium">优质问答
            </van-tag>
          </div>
        </div>
        <van-divider/>
      </div>
      <div>
        <div class="Article">
          <p style=" overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: pre-wrap;line-height: 30px;">
            患者问：医生您好！心脏造影检查三根血管一个堵塞百分之八十，一个堵塞百分之百，应如何治疗？</p>
          <p style=" overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: pre-wrap;line-height: 30px;color: #8C8C8C;font-size: 14px;">
            您好！很荣幸帮助你！根据您的描述，需要结合临床症状及具体的造影结果，比如堵塞的部位及血管的条件等。如果积极治疗的话，一般可以考虑放支架，如果血管情况特殊，
            也可能需要搭桥。当然，如果病情相对稳定，没有症状或只在劳累时才有心绞痛，也可以暂时药物保守治疗。</p>
          <div class="ArticleBottom">
            <img style="width:21px;height:21px;float: left;margin-top: 15px;margin-left: 15px;border-radius: 100%;"
                 src="https://img2.baidu.com/it/u=1807443568,704507401&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666630800&t=58fea629b9bc250c74ebffcad9b2ec50"
                 alt="">
            <p style="line-height: 55px;text-indent: 10px;float: left;">徐浩&nbsp; 主治医师 &nbsp;心内科</p>
            <van-tag color="rgb(219 216 216)" style="margin-top: 17px;float: right;margin-right:20px;color: #8C8C8C;"
                     type="primary" size="medium">优质问答
            </van-tag>
          </div>
        </div>
        <van-divider/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {getTransitionRawChildren, ref} from 'vue'
import navTop from '../components/Nav.vue'
import {keshiApi} from "../api/serve";


const value = ref('')
const keshi = ref<any>([])
keshiApi({}).then(ele => {
  console.log(ele.data.data);
  keshi.value = ele.data.data
})


</script>
<style scoped>
.box {
  margin-top: 54px;
}

.ArticleBottom {
  width: 100%;
  height: 55px;
}

.Article {
  width: 100%;
}

.DepartmentTextRight svg {
  float: right;
  margin-top: 17px;
}

.Navigation {
  margin-top: -40px !important;
  margin-bottom: 50px;
  box-sizing: border-box;
  padding: 0 20px;
}

.KingKongnav svg {
  margin-top: 10px;
}

.KingKongnav {
  width: 45px;
  height: 87px;
  margin-right: 25px;
  overflow: hidden;
}

.KingKong {
  width: 100%;
  height: 180px;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.DepartmentTextRight {
  line-height: 58px;
  color: #8C8C8C;
  float: right;
}

.DepartmentText {
  height: 58px;
  box-sizing: border-box;
  padding-right: 10px;
}

.Department {
  height: 283px;
  margin-top: 20px;
}

.AskQuestions svg {
  float: left;
  margin-left: 20px;
  margin-top: 8px;
}

.AskQuestions {
  width: 100%;
  height: 60px;
  margin-top: 10px;

  box-sizing: border-box;
}
</style>
