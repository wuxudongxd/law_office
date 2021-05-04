<template>
  <div class="about">
    <!--  关于我们-走马灯  -->
    <div v-if="carousel">
      <carouselItem :carousel="carousel" hdgd="400px"></carouselItem>
    </div>
    <!--  关于我们-详情  -->
    <div v-if="about">
      <detailCard title="关于我们" :content="about.content"></detailCard>
    </div>
  </div>
</template>

<script>
import carouselItem from '~/components/index/carousel/carouselItem'
import detailCard from '~/components/card/detailCard'
export default {
  name: 'About',
  components: {
    carouselItem,
    detailCard,
  },
  async asyncData({ app }) {
    try {
      const [carousel, about] = await Promise.all([
        app.$api.reqGetCarousel(),
        app.$api.reqGetAbout(),
      ])
      return {
        carousel: carousel.data.data,
        about: about.data.data,
      }
    } catch (e) {
      return {
        carousel: [],
        about: [],
      }
    }
  },
}
</script>

<style scoped>
/deep/ .text {
  font-size: 18px;
  color: #5a6268;
  line-height: 32px;
  text-indent: 2em;
}
</style>
