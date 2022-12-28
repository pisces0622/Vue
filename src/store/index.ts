import { createStore } from 'vuex'
import {getArticle} from "@/api/serve";

export default createStore({
  state: {
    getarticles: []
  },
  getters: {
  },

  mutations: {
    indexList(state){
      const str = `per=5&page=1`
      getArticle(str).then((ele)=>{
        console.log(ele.data.data.list);
        state.getarticles = ele.data.data.list
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
