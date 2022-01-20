/* 登录与注册仓库 */
// 引入axios请求模块
import { reqGetCode, reqRegister } from "@/api";

const actions = {
  // 获取手机验证码
  async getPhoneCode(context, phone) {
    const result = await reqGetCode(phone);
    if (result.status === 200) {
      context.commit('GETPHONECODE', result.data);
    }
  },
  // 注册用户
  async registerUser(context, data) {
    const result = await reqRegister(data);
    if (result.status === 200) {
      console.log(result.data);
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  }
}
const mutations = {
  GETPHONECODE(state, code) {
    state.code = code.data;
  }
}
const state = {
  code: ''
}
const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}
