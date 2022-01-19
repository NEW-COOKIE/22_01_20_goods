// 注册路由
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用路由插件
Vue.use(VueRouter);

// 引入路由配置信息
import routes from './routes';

// 重写push | replace
/* 
call|aplly
相同点: 都可以调用函数一次 都可以修改函数上下文一次
不同点: call传递参数用逗号隔开, aplly传递参数用数组
 */
// 1. 把VueRouter的原型对象中的push | replace保存
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace

// 2. 根据所传参数重写push|replace
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(this, location, () => { }, () => { });
  }
}

export default new VueRouter({
  // 路由配置信息
  routes,
  // 路由滚动行为
  scrollBehavior() {
    return { y: 0 }
  }
});
