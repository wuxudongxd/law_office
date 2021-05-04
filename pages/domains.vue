<template>
  <div class="domains">
    <div class="domains_title">专业领域</div>
    <div v-if="domains" class="domains_collapse">
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item
          v-for="(item, index) in domains"
          :key="index"
          :title="item.domains_title"
          :name="index"
        >
          <div
            class="law_content"
            v-html="$options.filters.limitContent(item.domains_content)"
          ></div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div v-else>没有专业领域</div>
  </div>
</template>

<script>
export default {
  name: 'Domains',
  filters: {
    limitContent(data) {
      return data.substring(0, 500)
    },
  },
  asyncData({ app }) {
    return app.$api
      .reqGetDomain()
      .then((res) => {
        return {
          domains: res.data.data.rows,
        }
      })
      .catch(() => {
        return {
          domains: [],
        }
      })
  },
  data() {
    return {
      activeNames: ['1'],
    }
  },
}
</script>

<style scoped>
.domains_title {
  margin: 60px 0 40px 0;
  color: #bea34d;
  font-size: 30px;
  text-align: center;
}
.domains_collapse {
  display: flex;
  justify-content: center;
}
.law_content {
  font-size: 16px;
  text-indent: 2em;
  line-height: 2em;
  padding: 0 50px;
}
/deep/ .el-collapse {
  width: 80%;
  min-width: 400px;
}
/deep/ .el-collapse-item__header {
  font-size: 20px;
  padding: 20px 50px;
}
/deep/ .el-collapse-item__header:hover {
  color: #415f92;
}
@media (max-width: 400px) {
  /deep/ .el-collapse {
    width: 100%;
  }
}
</style>
