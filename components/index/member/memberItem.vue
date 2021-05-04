<template>
  <div class="card">
    <nuxt-link
      :to="{
        name: link,
        params: { id: id },
      }"
    >
      <img
        :src="'https://www.delphes.cn/api' + item.member_picture"
        :alt="item.member_name"
      />
      <div class="member-info">
        <div style="margin-bottom: 10px">
          <span class="member_name">{{ item.member_name }}</span>
          <span v-if="item.member_positions" class="member_position"
            >({{ item.member_positions }})</span
          >
        </div>
        <div class="content-wrapper">
          <div class="content">
            <div
              class="member_field"
              v-text="
                $options.filters.limitContent(item.member_field) + ' ......'
              "
            ></div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'MemberItem',
  filters: {
    limitContent(data) {
      return data.substring(0, 20)
    },
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    link: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000;
}
/deep/ .el-col {
  display: flex;
  justify-content: center;
}
.card {
  box-sizing: border-box;
  height: 350px;
  width: 260px;
  background-color: #eee;
  margin-bottom: 40px;
  overflow: hidden;
  border-radius: 4px;
  margin-left: 50%;
  transform: translateX(-50%);
  box-shadow: 0.1rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
}
.card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.member-info {
  text-align: center;
  font-size: 22px;
  padding: 10px 10px 10px 15px;
}
.member_position {
  font-size: 15px;
}
.member_field {
  font-size: 16px;
}
</style>
