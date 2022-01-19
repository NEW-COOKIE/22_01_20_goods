import Vue from 'vue'
import App from './App.vue'

// 关闭引入开发vue提示
Vue.config.productionTip = false

// 注册TypeNav全局组件
import TypeNav from '@/components/TypeNav';
Vue.component(TypeNav.name, TypeNav);
// 注册Carouesl全局组件
import Carouesl from '@/components/Carousel';
Vue.component(Carouesl.name, Carouesl);
// 注册全局Pagination全局组件
import Pagination from '@/components/Pagination';
Vue.component(Pagination.name, Pagination);

// 引入路由插件
import router from '@/router';
// 引入store插件
import store from '@/store';

// 引入mock数据
import '@/mock/mockServe';

// 引入swiper样式
import 'swiper/css/swiper.css';

new Vue({
  render: h => h(App),
  // 安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  // 使用路由 使用k-v的简写方式
  router,
  // 使用状态管理模式vuex
  store,
}).$mount('#app')
