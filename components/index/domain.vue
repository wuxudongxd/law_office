<template>
  <!--  首页业务领域  -->
  <div class="domains">
    <div class="title">业务领域</div>
    <div style="display: flex; justify-content: center">
      <div class="title-assistant">
        法律业务是指法人或自然人为实现自己的正当权益，提高经济效益、维护自身合法权益而聘请律师，法律工作者，专业人士（包括法人内部在职人员、退、离休政法人员等）或机构以其法律知识和技能提供业务的专业活动。
      </div>
    </div>
    <div class="domains-list">
      <div v-for="item in domain" :key="item.id" class="domains-item">
        <nuxt-link to="/domains"
          ><div class="item-title">{{ item.domains_title }}</div>
          <div
            class="item-text"
            v-html="$options.filters.limitContent(item.domains_content)"
          ></div
        ></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Domain',
  filters: {
    limitContent(data) {
      // data = data.replace(/^style="*"$/, '')
      return data.substring(0, 500)
    },
  },
  props: {
    domain: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.title {
  height: 60px;
  font-size: 30px;
  color: #bea34d;
  text-align: center;
  margin: 80px 0 0 0;
}
.title-assistant {
  width: 60%;
  color: #828282;
  text-align: center;
  margin-bottom: 40px;
}
.domains-list {
  display: flex;
  justify-content: center; /* 水平居中 */
  flex-wrap: wrap;
}
.domains-item {
  width: 350px;
  height: 300px;
  border: #ededed 1px solid;
  margin: 20px;
  text-align: center;
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.domains-item:hover {
  background-color: #324970;
  transition: background-color 0.5s, color 0.5s;
}
.item-title {
  font-size: 30px;
  color: #324970;
  margin: 20px;
}
.domains-item:hover .item-title {
  color: #fff;
}
.item-text {
  color: #828282;
  margin: 20px;
  height: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.domains-item:hover .item-text >>> span,
.domains-item:hover .item-text >>> p {
  color: #c2c8d4 !important;
}
</style>
