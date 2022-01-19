// 创建状态管理模式
import Vue from 'vue';
import Vuex from 'vuex';

// 使用vuex插件
Vue.use(Vuex);

// 引入模块数据
import home from './home';
import search from './search';
import datail from './datail';
import shopcart from './shopcart';

// 创建并暴露store
export default new Vuex.Store({
  // 实现vuex模块化状态管理
  modules: {
    home,
    search,
    datail,
    shopcart
  }
})
