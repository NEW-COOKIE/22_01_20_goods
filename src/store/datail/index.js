/* 商品数据列表仓库 */
// 引入axios请求模块
import { reqGoodsInfo, reqAddOrUpDataShopCart } from "@/api";
import { user_token } from '@/utils/uuid_token.js';

const actions = {
  // 获取商品详细信息
  async getGoodsInFo(context, value) {
    const goodsInfoList = await reqGoodsInfo(value);
    if (goodsInfoList.status === 200) {
      context.commit('GETGOODSINFO', goodsInfoList.data);
    }
  },

  // 添加商品数量
  async addShopCart(context, { skuId, skuNum }) {
    const ShopCart = await reqAddOrUpDataShopCart(skuId, skuNum);
    if (ShopCart.data.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'));
    }
  }
}

const mutations = {
  GETGOODSINFO(state, value) {
    if (value.code === 200) {
      state.goodsInfo = value.data;
    }
  }
}

const state = {
  goodsInfo: {},
  uuid_token: user_token()
}

const getters = {
  categoryView(state) {
    return state.goodsInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.goodsInfo.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.goodsInfo.spuSaleAttrList || []
  }
}

export default {
  actions,
  mutations,
  state,
  getters
}