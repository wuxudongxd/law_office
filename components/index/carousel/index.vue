<template>
  <!--  首页走马灯  -->
  <carouselItem :carousel="carousel" :hdgd="hdgd"></carouselItem>
</template>

<script>
import carouselItem from '~/components/index/carousel/carouselItem'
export default {
  name: 'Carousel',
  components: {
    carouselItem,
  },
  props: {
    carousel: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      hdgd: '810px',
    }
  },
  mounted() {
    const that = this
    window.onresize = function windowResize() {
      // 通过捕获系统的onresize事件触发我们需要执行的事件
      const w = window.innerWidth
      let h = 810
      if (w > 1180) {
        h = 810
      } else {
        h = w
      }
      that.hdgd = h + 'px'
    }
  },
}
</script>

<style scoped></style>
