import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'
import Vant from 'vant';
import 'vant/lib/index.css';

router.beforeEach((to, from, next) => {
        if (to.meta.requireAuth) {
            // 获取token
            const token = sessionStorage.getItem('token')
            if (token) {
                next()
            } else {
                next({
                    path: '/Login'
                })
            }
        } else {
            next()
        }
    }
)

createApp(App).use(store).use(Vant).use(router).mount('#app')
