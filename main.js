import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import Cube from 'cube-ui'
import ElementUI from 'element-ui'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from "@/router";
import './assets/css/global.css'
import 'amfe-flexible'
import './plugins/element.js'
import serveCard from "@/components/serviceComponents/serveCard";
import peopleCard from "@/components/peopleCard";
import healthCard from "@/components/healthCard";
import contactCard from "@/components/contactCard";


import axios from "axios";
import { Message } from 'element-ui'

import VueQuillEditor from 'vue-quill-editor'
// 导入富文本编辑器对应的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import echarts from 'echarts'
import commentCard from "@/components/serviceComponents/commentCard";
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$message = Message
Vue.prototype.$requireIP='http://192.168.137.33:8980/js/'

Vue.use(Cube)
Vue.use(ElementUI)
Vue.use(Element)

Vue.component(serveCard.name,serveCard)
Vue.component(peopleCard.name,peopleCard)
Vue.component(healthCard.name,healthCard)
Vue.component(contactCard.name,contactCard)
Vue.component(commentCard.name,commentCard)

// 将富文本编辑器注册为全局可用组件
Vue.use(VueQuillEditor)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
