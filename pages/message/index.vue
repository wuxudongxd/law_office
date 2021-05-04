<template>
  <div class="message">
    <div class="message-title">律所动态</div>
    <div v-if="message">
      <div v-for="item in message.rows" :key="item.id">
        <listCard
          :id="item.id"
          link="message-id"
          :title="item.message_title"
          :time="item.add_time"
          :content="item.message_content"
        ></listCard>
      </div>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="message.total"
          :current-page="1"
          :page-size="5"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
    <div v-else>没有动态</div>
  </div>
</template>

<script>
import listCard from '~/components/card/listCard'
export default {
  name: 'Message',
  components: {
    listCard,
  },
  asyncData({ app }) {
    return app.$api
      .reqGetMessage(1)
      .then((res) => {
        return {
          message: res.data.data,
        }
      })
      .catch(() => {
        return {
          message: {},
        }
      })
  },
  methods: {
    async handleCurrentChange(val) {
      try {
        const res = await this.$api.reqGetMessage(val)
        this.message = res.data.data
      } catch (e) {}
    },
  },
}
</script>

<style scoped>
.message-title {
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
