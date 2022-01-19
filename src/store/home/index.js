// 引入axios请求模块
import {reqCategoryList, reqBannterList, reqFloorList} from '@/api';

// home数据管理模块
const actions = {
  async getCategoryList(context) {
    const categoryList =  await reqCategoryList();
    if (categoryList.status === 200) {
      context.commit('ADDCATGORYLIST', categoryList.data);
    }
  },

  async getBannerList(context) {
    const bannerList = await reqBannterList();
    if (bannerList.status === 200) {
      context.commit('ADDBANNERLIST', bannerList.data);
    }
  },

  async getFloorList(context) {
    const floorList = await reqFloorList();
    if (floorList.status === 200) {
      context.commit('ADDFLOORLIST', floorList.data);
    }
  }
};

const mutations = {
  ADDCATGORYLIST(state, value) {
    if (value.code === 200) {
      state.categoryList = value.data;
    }
  },

  ADDBANNERLIST(stat, value) {
    if (value.code === 200) {
      stat.bannerList = value.data;
    }
  },

  ADDFLOORLIST(stat, value) {
    if (value.code === 200) {
      stat.floorList = value.data;
    }
  }
};

const state = {
  // 商品分类列表
  categoryList: [],
  // 轮播图列表
  bannerList: [],
  // floor商品列表
  floorList: []
};

const getters = {};

// 默认暴露
export default {
  actions,
  mutations,
  state,
  getters
}
