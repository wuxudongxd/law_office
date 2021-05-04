<template>
  <el-carousel trigger="click" :height="hdgd">
    <el-carousel-item v-for="item in carousel" :key="item.id">
      <img
        class="carousel-img"
        :src="'https://www.delphes.cn/api' + item.image_address"
        :alt="item.image_name"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: {
    carousel: {
      type: Array,
      default: () => [],
    },
    hdgd: {
      type: String,
      default: '400px',
    },
  },
}
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
