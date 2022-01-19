<template>
  <!-- 轮播图 -->
  <div class="swiper-container" ref="car">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="Carouesl in list" :key="Carouesl.id">
        <img :src="Carouesl.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import swiper from "swiper";

export default {
  props: ["list"],
  name: "Carouesl",
  watch: {
    list: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          new swiper(this.$refs.car, {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>