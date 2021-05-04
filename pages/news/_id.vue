<template>
  <div v-if="news">
    <detailCard
      :title="news.news_title"
      :content="news.news_content"
    ></detailCard>
  </div>
</template>

<script>
import detailCard from '~/components/card/detailCard'
export default {
  name: 'Datail',
  components: {
    detailCard,
  },
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  },
  async asyncData({ app, params }) {
    try {
      const newsitem = await app.$api.reqGetNewsDetail(params.id)
      return {
        news: newsitem.data.data,
      }
    } catch (err) {
      return {
        news: {},
      }
    }
  },
}
</script>

<style scoped></style>
