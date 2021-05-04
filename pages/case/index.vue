<template>
  <div>
    <div class="example-title">成功案例</div>
    <div v-if="example">
      <div v-for="item in example.rows" :key="item.add_time">
        <listCard
          :id="item.id"
          link="case-id"
          :title="item.case_title"
          :time="item.add_time"
          :content="item.case_field"
        ></listCard>
      </div>
    </div>
    <div v-else>没有成功案例</div>

    <div v-if="example">
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="example.total"
          :current-page="1"
          :page-size="10"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import listCard from '~/components/card/listCard'
export default {
  name: 'Example',
  components: {
    listCard,
  },
  asyncData({ app }) {
    return app.$api
      .reqGetExample()
      .then((res) => {
        return {
          example: res.data.data,
        }
      })
      .catch(() => {
        return {
          example: {},
        }
      })
  },
  methods: {
    async handleCurrentChange(val) {
      try {
        const res = await this.$api.reqGetExample(val)
        this.example = res.data.data
      } catch (e) {}
    },
  },
}
</script>

<style scoped>
.example-title {
  margin: 60px 0 40px 0;
  color: #bea34d;
  font-size: 30px;
  text-align: center;
}
.example-card {
  min-height: 100px;
  margin: 20px 100px;
  padding: 20px;
}
.item-time {
  color: #9e9e9e;
  float: right;
  font-size: 14px;
}
@media (max-width: 800px) {
  .example-card {
    margin: 20px 60px;
  }
  .item-time {
    display: none;
  }
}
@media (max-width: 480px) {
  .example-card {
    margin: 20px;
  }
}
.item-title {
  font-size: 20px;
  color: #bea34d;
  float: left;
  margin-bottom: 20px;
}
.item-content {
  clear: both;
}
.pagination {
  display: inline-flex;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
}
</style>
