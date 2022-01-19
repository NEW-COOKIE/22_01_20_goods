
// 引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart'

// 路由配置信息
export default [
  // 首页
  {
    path: '/home',
    component: Home,
    // 设置路由元信息
    meta: {
      isFooterShow: true
    }
  },
  // 搜索
  {
    name: 'search',
    path: '/search/:keyWord?', // 指定params可传可不传
    component: Search,
    /* 第一种 布尔值 */
    // props: true,

    /* 第二种 对象 */
    // props: {a: 1, b: 2},

    /* 第三种  方法*/
    props: ($route) => {
      return { keyWord: $route.params.keyWord }
    },

    // 设置路由元信息
    meta: {
      isFooterShow: true
    }
  },
  // 登录
  {
    path: '/login',
    component: Login
  },
  // 注册
  {
    path: '/register',
    component: Register
  },
  // 商品详细
  {
    path: '/detail/:skuid',
    component: Detail,
    meta: {
      isFooterShow: true
    }
  },
  // 添加到购物车
  {
    name: 'addcartsuccess',
    path: '/addcartsuccess',
    component: AddCartSuccess,
    meta: {
      isFooterShow: true
    }
  },
  // 商品结算
  {
    name: 'shopcart',
    path: '/shopcart',
    component: ShopCart,
    meta: {
      isFooterShow: true
    }
  },

  // 设置默认路由
  {
    path: '/',
    redirect: '/home'
  }
]