<template>
  <div>
    <!-- 全局组件 -->
    <TypeNav />
    <ListConainter />
    <Recomment />
    <Rank />
    <Like />
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor" />
    <Brand />
  </div>
</template>

<script>
// 引入组件
import ListConainter from "@/pages/Home/ListContaner";
import Recomment from "@/pages/Home/Recomment";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";

import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    ListConainter,
    Recomment,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorList(state) {
        return state.home.floorList;
      },
    }),
  },
};
</script>