<template>
  <div v-if="example">
    <detailCard
      :title="example.case_title"
      :content="example.case_field"
      :author="example.case_boss_name"
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
      const exampleitem = await app.$api.reqGetExamplePart(params.id)
      return {
        example: exampleitem.data.data,
      }
    } catch (err) {
      return {
        example: {},
      }
    }
  },
}
</script>

<style scoped></style>
