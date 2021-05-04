<template>
  <div class="news">
    <Nuxt />
    <!--  热点新闻-走马灯  -->
    <carouselItem :carousel="carousel" hdgd="400px"></carouselItem>
    <div class="news-title">热点新闻</div>
    <div v-if="news">
      <div v-for="item in news.rows" :key="item.id">
        <listCard
          :id="item.id"
          link="news-id"
          :title="item.news_title"
          :time="item.add_time"
          :content="item.news_content"
        ></listCard>
      </div>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="news.total"
          :current-page="1"
          :page-size="5"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
    <div v-else>没有新闻</div>
  </div>
</template>

<script>
import carouselItem from '~/components/index/carousel/carouselItem'
import listCard from '~/components/card/listCard'
export default {
  name: 'News',
  components: {
    carouselItem,
    listCard,
  },
  async asyncData({ app }) {
    try {
      const [carousel, news] = await Promise.all([
        app.$api.reqGetCarousel(),
        app.$api.reqGetNews(1),
      ])
      return {
        carousel: carousel.data.data,
        news: news.data.data,
      }
    } catch (e) {
      return {
        carousel: [],
        news: {},
      }
    }
  },
  methods: {
    async handleCurrentChange(val) {
      try {
        const res = await this.$api.reqGetNews(val)
        this.news = res.data.data
      } catch (e) {}
    },
  },
}
</script>

<style scoped>
.news-title {
  margin: 60px 0 40px 0;
  color: #bea34d;
  font-size: 30px;
  text-align: center;
}
.pagination {
  display: inline-flex;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
}
</style>
