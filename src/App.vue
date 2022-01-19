<template>
  <div>
    <Header />
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!-- 设置底部组件显示与隐藏 此方法不推荐 -->
    <!-- <Footer v-show="$route.path === '/home' || $route.path === '/search'"/> -->
    <Footer v-show="$route.meta.isFooterShow" />
  </div>
</template>

<script>
// 引入组件
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },

  // 挂载完毕: 可以向服务器发送请求
  mounted() {
    this.$store.dispatch("getCategoryList");
  },
};
</script>

<style>
</style>