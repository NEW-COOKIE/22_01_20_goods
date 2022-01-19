<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <!-- 声明式导航 -->
            <router-link to="/login">登录</router-link>
            <router-link to="/login">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyWord"
          />
          <!-- 编程式路由导航 -->
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyWord: "",
    };
  },
  mounted() {
    this.$bus.$on("clear", () => {
      this.keyWord = "";
    });
  },
  methods: {
    /* 点击搜索按钮的回调 需要向search组件进行跳转 */
    goSearch() {
      /* 第一种传参 字符传参 */
      // this.$router.push('/search/'+ this.keyWord + '?k=' + this.keyWord.toUpperCase());

      /* 第二种传参 模板字符串 */
      // this.$router.push(`/search/${this.keyWord}?k=${this.keyWord.toUpperCase()}`);

      /* 第三中 对象传参 注意要路由要设置名称 name=xxx */

      // 判断query是否有参数 如果有把参数进行拼接
      let location = {
        name: "search",
        params: { keyWord: this.keyWord || undefined },
      };

      if (this.$route.query) {
        location.query = this.$route.query;
      }
      this.$router.push(location);

      /* 
        1.对象传参 path不能和params参数一起使用
        2.路由要求传递params参数 如果没有传 url会有问题 导致跳转路由消失
          如何指定params参数可传递/不传递 在配置路由时在占位符后面添加'?'问号('?'代表可传, 可不传)
        3.如果这时传递空的params值, 也会导致url出问题 可以使用nudefined解决 params{key: '' || nudefined}
        4.路由组件可以props传参
            有三种写发
       */
    },
  },
};
</script>

<style lang='less' scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>