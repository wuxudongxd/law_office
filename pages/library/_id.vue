<template>
  <div v-if="library">
    <detailCard
      :title="library.content_title"
      :content="library.content"
      :author="library.content_author"
    ></detailCard>
  </div>
</template>

<script>
import detailCard from '~/components/card/detailCard'
export default {
  name: 'Id',
  components: {
    detailCard,
  },
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  },
  async asyncData({ app, params }) {
    try {
      const libraryitem = await app.$api.reqGetLibraryPart(params.id)
      return {
        library: libraryitem.data.data,
      }
    } catch (err) {
      return {
        library: {},
      }
    }
  },
}
</script>

<style scoped></style>
