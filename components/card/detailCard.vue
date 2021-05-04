<template>
  <div>
    <div v-if="title" class="title" v-text="title"></div>
    <el-card v-if="content || author" shadow="hover" class="card">
      <div v-if="content" class="text" v-html="content"></div>
      <div v-if="author" class="author" v-text="author"></div>
    </el-card>
    <div v-else class="text-default">没有相关信息</div>
  </div>
</template>

<script>
export default {
  name: 'DetailCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.card {
  min-height: 500px;
  margin: 60px 200px 100px;
}
@media (max-width: 1000px) {
  .card {
    margin: 60px 100px 100px;
  }
}
@media (max-width: 800px) {
  .card {
    margin: 60px 60px 100px;
  }
}
@media (max-width: 600px) {
  .card {
    margin: 60px 30px 100px;
  }
}
@media (max-width: 480px) {
  .card {
    margin: 40px 0 100px;
  }
}
.title {
  margin: 60px 0 40px 0;
  color: #bea34d;
  font-size: 30px;
  text-align: center;
}
.author {
  float: right;
  margin-bottom: 10%;
  margin-right: 20px;
}
.text {
  margin: 20px;
  text-indent: 2rem;
  line-height: 22px;
}
/deep/ .text img {
  max-width: 80%;
  height: auto;
}
.text-default {
  text-align: center;
}
</style>
