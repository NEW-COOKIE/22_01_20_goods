/* 搜索仓库 */
// 引入axios请求模块
import { reqSearchList } from "@/api";

// home数据管理模块
const actions = {
  async getSearchList(context, value = {}) {
    const searchObj = await reqSearchList(value);
    if (searchObj.status === 200) {
      context.commit('SETSEARCHLIST', searchObj.data);
    }
  }
};

const mutations = {
  SETSEARCHLIST(state, value) {
    if (value.code === 200) {
      state.searchListObj = value.data
    }
  }
};
// 设置初始化数据
const state = {
  searchListObj: {}
};

const getters = {
  goodsList(state) {
    return state.searchListObj.goodsList || []
  },

  trademarkList(state) {
    return state.searchListObj.trademarkList || []
  },

  attrsList(state) {
    return state.searchListObj.attrsList || []
  }
};

// 默认暴露
export default {
  actions,
  mutations,
  state,
  getters
}
