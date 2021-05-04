<template>
  <div v-if="message">
    <detailCard
      :title="message.message_title"
      :content="message.message_content"
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
      const messageitem = await app.$api.reqGetMessageDetail(params.id)
      return {
        message: messageitem.data.data,
      }
    } catch (err) {
      return {
        message: {},
      }
    }
  },
}
</script>

<style scoped></style>
