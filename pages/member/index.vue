<template>
  <div class="member">
    <div class="member-title">团队律师</div>
    <div class="member-list">
      <el-row :gutter="30">
        <el-col
          v-for="item of member"
          :key="item.id"
          :xs="24"
          :sm="12"
          :md="8"
          :lg="6"
          :xl="6"
          ><member-item
            :id="item.id"
            link="member-id"
            :item="item"
          ></member-item>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import memberItem from '~/components/index/member/memberItem'
export default {
  name: 'Member',
  components: {
    memberItem,
  },
  asyncData({ app }) {
    return app.$api
      .reqGetMember()
      .then((res) => {
        return {
          member: res.data.data.rows,
        }
      })
      .catch(() => {
        return {
          member: [],
        }
      })
  },
}
</script>

<style scoped>
.member-title {
  margin: 60px 0 40px 0;
  color: #bea34d;
  font-size: 30px;
  text-align: center;
}
.member-list {
  width: 90%;
  margin: 0 5%;
}
</style>
