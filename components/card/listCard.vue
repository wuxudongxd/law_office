<template>
  <client-only>
    <el-card shadow="hover" class="card">
      <nuxt-link
        :to="{
          name: link,
          params: { id: id },
        }"
      >
        <div class="item-title">{{ title }}</div>
        <div class="item-time">{{ time | formatDate }}</div>
      </nuxt-link>
      <div
        class="item-content"
        v-html="$options.filters.limitContent(content) + ' ......'"
      ></div>
    </el-card>
  </client-only>
</template>

<script>
export default {
  name: 'ListCard',
  filters: {
    limitContent(data) {
      return data.substring(0, 350)
    },
  },
  props: {
    link: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: '',
    },
    time: {
      type: Number,
      default: 0,
    },
    content: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.card {
  min-height: 100px;
  margin: 20px 200px;
  padding: 20px;
}
@media (max-width: 1000px) {
  .card {
    margin: 20px 100px;
  }
}
@media (max-width: 800px) {
  .card {
    margin: 20px 60px;
  }
  .item-time {
    display: none;
  }
}
@media (max-width: 600px) {
  .card {
    margin: 30px;
  }
}
@media (max-width: 480px) {
  .card {
    margin: 20px;
  }
}
.item-title {
  font-size: 20px;
  color: #bea34d;
  float: left;
  margin-bottom: 20px;
}
.item-time {
  color: #9e9e9e;
  float: right;
  font-size: 14px;
}
.item-content {
  clear: both;
  text-indent: 2rem;
  line-height: 22px;
}
/deep/ .item-content img {
  max-width: 80%;
  height: auto;
}
</style>
