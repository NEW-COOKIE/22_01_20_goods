// 当前模块对API 统一进行管理
import service from './service';

// 当前模块对mock 统一进行处理
import mockServer from './mockServer';

/* 
三级联动接口
url: /api/product/getBaseCategoryList
请求方式: get
参数: 无 
*/
export const reqCategoryList = () => {
  return service({ url: '/product/getBaseCategoryList', method: 'get' });
}

/* 
轮播图 (mock数据)
url: '/mock/banner'
请求方式: get
参数: 无
 */
export const reqBannterList = () => {
  return mockServer({ url: '/banner', method: 'get' });
}

/* 
floor (mock数据)
url: '/mock/fllor'
请求方式: get
参数: 无
 */
export const reqFloorList = () => {
  return mockServer({ url: '/floor', method: 'get' });
}

/* 
search接口
url: '/api/list',
请求方式: 'post',
参数: 需要
 */
export const reqSearchList = (params) => {
  return service({ url: '/list', method: 'post', data: params });
}

/* 
datail接口 获取商品详情信息
url: 'api/item/{skuid}'
请求方式: 'get'
参数: 需要
 */
export const reqGoodsInfo = (skuid) => {
  return service({ url: `/item/${skuid}`, method: 'get' });
}

/* 
购物车接口
url: 'api/cart/addToCart/{skuId}/{skuNum}'
请求方式: 'post'
参数: 需要
*/
export const reqAddOrUpDataShopCart = (skuId, skuNum) => {
  return service({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });
}

/* 
获取购物车列表数据接口
url: 'api/cart/cartList'
请求方式: 'get'
参数: 无
 */
export const reqCartList = () => {
  return service({ url: 'cart/cartList', method: 'get' });
}

/* 
删除购物产品接口
url: 'api/cart/deleteCart/{skuId}'
请求方式: 'delete'
参数: 需要
 */
export const deleteCartList = (skuId) => {
  return service({ url: `/cart/deleteCart/${skuId}`, method: 'delete' });
}

/* 
修改文档选中状态
url: 'api/cart/checkCart/{skuId}/{isChecked}'
请求方式: 'get'
参数: 需要
 */
export const reqcheckCar = (skuId, isChecked) => {
  return service({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' });
}

/* 
获取验证码
url: 'api/user/passport/sendCode/{hone}'
请求方式: 'get'
参数: 需要
 */
export const reqGetCode = (phone) => {
  return service({ url: `/user/passport/sendCode/${phone}`, method: 'get' });
}

/* 
用户注册
url: "api/user/passport/register"
请求方式: 'post'
参数: 需要
 */
export const reqRegister = (data) => {
  return service({ url: '/user/passport/register', data, method: 'post' });
}
