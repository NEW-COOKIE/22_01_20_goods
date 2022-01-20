/* 购物车仓库 */
// 引入axios请求模块
import { reqCartList, deleteCartList, reqcheckCar } from "@/api"

const actions = {
  // 获取购物车列表
  async getCartList(context) {
    const cartList = await reqCartList();
    if (cartList.status === 200) {
      context.commit('CARTINFOLIST', cartList.data);
    }
  },

  // 删除购物车列表
  async deleteCartList(context, value) {
    const result = await deleteCartList(value);
    if (result.status === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'))
    }
  },

  // 购物车勾选
  async isCheckCart(context, { skuId, isChecked }) {
    const result = await reqcheckCar(skuId, isChecked);
    if (result.status === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  // 删除所有购物车列表
  deleteAllCart({ dispatch, getters }) {
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked === 1 ? dispatch('deleteCartList', item.skuId) : '';

      PromiseAll.push(promise);
    });

    return Promise.all(PromiseAll);
  },
  // 修改所有购车勾选
  isChangeAllChecked({ dispatch, getters }, isChecked) {
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach(item => {
      let promise = dispatch('isCheckCart', { skuId: item.skuId, isChecked: isChecked });

      PromiseAll.push(promise);
    })

    return Promise.all(PromiseAll);
  }
}

const mutations = {
  CARTINFOLIST(state, value) {
    if (value.code === 200) {
      state.cartList = value.data;
    }
  }
}

const state = {
  cartList: []
}

const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  }
}

export default {
  actions,
  mutations,
  state,
  getters
}